import { Component, OnInit } from '@angular/core';
import { MiniStatementService } from './mini-statement.service';
import { MiniStatementData } from './mini-statement-data';

@Component({
  selector: 'mini-statement',
  templateUrl: './mini-statement.component.html',
  providers: [MiniStatementService]
})


export class MiniStatementComponent implements OnInit {

  constructor(private miniStatementService: MiniStatementService) {

  }

  miniStatementData: MiniStatementData[];

  ngOnInit(): void {
    let loginId = localStorage.getItem('userId');
    this.miniStatementService.getMiniStatement(loginId).subscribe(
      result => {
        //TODO:Write Logic for initialising user
        this.miniStatementData = result;

      }
    );
  }

  getInitialStatement(): void {

  }

}