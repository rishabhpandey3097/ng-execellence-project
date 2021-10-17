import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './Todo/todo.component';
import { UserDataComponent } from './userData/userData.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, TodoComponent, UserDataComponent, HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
