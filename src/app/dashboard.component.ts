import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { UserData } from './user-data';

@Component({
  selector: 'main-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [DashboardService]
})


export class DashboardComponent implements OnInit {


  userData: UserData = new UserData();
  constructor(private dashboardService: DashboardService) {

  }
  ngOnInit(): void {
    let loginId = localStorage.getItem('userId');
    this.dashboardService.getUserData(loginId).subscribe(
      result => {

        this.userData.balance = result.balance;
        this.userData.accountNo = result.accountNo;
        this.userData.type = result.type;
        this.userData.branch = result.branch;
        this.userData.userName = result.userName;
        this.userData.userId = result.userId;
        console.log(this.userData);
      }
    );
  }
}