import { CreateBookComponent } from './components/create-book/create-book.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayBookComponent } from './components/display-book/display-book.component';

const routes: Routes = [
  {path:"create", component:CreateBookComponent},
  {path:"display",component:DisplayBookComponent},
  {path:"**", component:DisplayBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
