import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
    private authUrl = "http://localhost:3000/login/user";
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http, private router: Router) { }

    login(loginId: string, password: string): void {

        let body = JSON.stringify({ loginId, password });
        this.http.post(this.authUrl, body, this.options).subscribe(
            response => {
                localStorage.setItem("userId", loginId);
                //localStorage.setItem("userId","123");
                //TODO: set token in local storage
                this.router.navigate(['/dashboard']);
            },
            error => {
                console.log("Error occured");
            }
        );


    }

}