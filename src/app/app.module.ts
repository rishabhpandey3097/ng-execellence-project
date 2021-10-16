import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './Todo/todo.component';
import { UserDataComponent } from './userData/userData.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, TodoComponent, UserDataComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
