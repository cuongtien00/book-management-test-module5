import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from './component/book-list/book-list.component';
import {BookCreateComponent} from './component/book-create/book-create.component';
import {BookDetailComponent} from './component/book-detail/book-detail.component';
import {BookEditComponent} from './component/book-edit/book-edit.component';
import {BookDeleteComponent} from './component/book-delete/book-delete.component';

const routes: Routes = [
  {path: '', component: BookListComponent},
  {path: 'book-create', component: BookCreateComponent},
  {path: 'book-detail/:id', component: BookDetailComponent},
  {path: 'book-edit/:id', component: BookEditComponent},
  {path: 'book-delete/:id', component: BookDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
