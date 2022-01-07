import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/Book';
import {ActivatedRoute, Params} from '@angular/router';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  // @ts-ignore
  book: Book = {};
  constructor(
    private activatedRouter: ActivatedRoute,
    private bookService: BookService
  ) { }
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

  ngOnInit(): void {
    this.loadData()
  }

}
