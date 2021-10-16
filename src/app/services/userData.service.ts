import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { user } from '../userData/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}
  getUserData(page: Number) {
    return this.http.get(`https://reqres.in/api/users?page=${page}`);
  }
}
