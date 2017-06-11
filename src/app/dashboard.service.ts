import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserData } from './user-data';

@Injectable()
export class DashboardService {


    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getUserData(loginId: string): Observable<UserData> {
        let userUrl = `http://localhost:3000/user/userInfo/${loginId}`;

        return this.http.get(userUrl).map(response => response.json() as UserData);


    }

}