import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MiniStatementData } from './mini-statement-data';

@Injectable()
export class MiniStatementService {

    constructor(private http: Http) { }

    getMiniStatement(loginId: string): Observable<MiniStatementData[]> {
        let url = `http://localhost:3000/ministatement/${loginId}`;
        return this.http.get(url).map(response => response.json() as MiniStatementData[]);

    }

}