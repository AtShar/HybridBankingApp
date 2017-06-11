import { Component, OnInit } from '@angular/core';
import { FundTransferService } from './fund-transfer.service';

@Component({
  selector: 'fund-transfer',
  templateUrl: './fund-transfer.component.html',
  providers: [FundTransferService]
})


export class FundTransferComponent implements OnInit {

  constructor(private fundTransferService: FundTransferService) {

  }


  ngOnInit(): void {

  }

  transferFund(): void {
    this.fundTransferService.transferFunds();
  }


}