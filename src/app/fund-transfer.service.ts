import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FundTransferService {

    constructor(private http: Http) { }

    transferFunds(): void {
        //TODO:Write Logic
        //Navigate to receipt page
        return;

    }

}