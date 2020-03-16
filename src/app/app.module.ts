import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GroceryComponent } from './app.grocery';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GroceryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [GroceryComponent]
})
export class AppModule { }
