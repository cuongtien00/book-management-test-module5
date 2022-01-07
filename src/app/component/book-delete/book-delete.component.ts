import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/Book';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.scss']
})
export class BookDeleteComponent implements OnInit {
  // @ts-ignore
  book: Book = {};
  constructor(
    private activatedRouter: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadData();
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
  onDelete(): void {
    this.bookService.delete(this.book.id).subscribe(data => {
    console.log(data);
    this.router.navigate(['/']);
    }, error => {
      this.bookService.handleError(error);
    });
  }

}
