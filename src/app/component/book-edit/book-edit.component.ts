import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/Book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  // @ts-ignore
  book: Book = {};
  check: any;
  constructor(
    private activatedRouter: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadData();
    this.check = false
  }
  loadData(): void {
    this.activatedRouter.params.subscribe((params: Params) => {
      console.log(params);
      const id = params.id;
      // @ts-ignore
      this.bookService.findById(id).subscribe(data => {
        this.book = data;
      });
    });
  }
  onEdit(): void {
    this.bookService.update(this.book.id, this.book).subscribe(data => {
      console.log(data);
      this.check = true;
    }, error => {
      this.bookService.handleError(error);
    });
  }

}
