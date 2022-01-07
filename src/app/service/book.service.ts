import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Book} from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  API_BOOK = environment.API_SERVER;

  constructor(
    private http: HttpClient
  ) {
  }

  findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_BOOK);
  }

  findById(id: number): Observable<Book> {
    return this.http.get<Book>(this.API_BOOK + '/' + id);
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.API_BOOK, book);
  }

  update(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(this.API_BOOK + '/' + id, book);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(this.API_BOOK + '/' + id);
  }
  handleError(err: any): any{
    if (err.error instanceof Error) {
      console.log(`Client-side error: ${err.error.message}`);
    } else {
      console.log(`Server-side error: ${err.status} - ${err.error.value}`);
    }
  }

}
