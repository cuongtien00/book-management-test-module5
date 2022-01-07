import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/Book';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(): void {
    this.bookService.findAll().subscribe(data => {
      console.log(data);
      this.books = data;
      // @ts-ignore
    }, error => {
      this.bookService.handleError(error);
    });
  }

}
