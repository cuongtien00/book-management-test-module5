import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/Book';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  form: any = {};
  // @ts-ignore
  book: Book = {};
  check = false;
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.check = false;
  }

  onSubmit(): void {
    this.book = {
      id: this.form.id,
      title: this.form.title,
      author: this.form.author,
      description: this.form.description,
    };
    this.bookService.create(this.book).subscribe(data => {
      console.log(data);
      this.check = true;
      this.form.reset();
    }, error => {
      this.bookService.handleError(error);
    });
  }
}
