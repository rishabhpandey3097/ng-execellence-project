import { Component, OnInit } from '@angular/core';

import { UserDataService } from '../services/userData.service';

// import { user } from './user.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userData.component.html',
  styleUrls: ['./userData.component.css'],
})
export class UserDataComponent implements OnInit {
  constructor(private userdataService: UserDataService) {}

  userData;

  ngOnInit() {
    this.getData(1);
  }

  //function to return list of numbers from 0 to n-1
  numSequence(n: number): Array<number> {
    return Array(n);
  }

  getData(page: Number) {
    this.userdataService.getUserData(page).subscribe((data) => {
      this.userData = data;
      console.log(this.userData);
    });
  }
}
