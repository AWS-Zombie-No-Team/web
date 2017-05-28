import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from '../user/user';

import { environment } from './../../environments/environment';

@Injectable()
export class UserService {

   headers = new Headers({
    "Content-Type": "application/json",
    'AuthToken': this.authService.getToken(),
  });

//   serverUrl = environment.serviceUrl + environment.serviceAPIPath;
    access_token = localStorage.getItem('token');

  constructor(
    private http: Http,
    private authService: AuthService,
    ) { }

  login(id: string, password: string): Observable<any> {

    let url = 'https://49t6art088.execute-api.eu-west-1.amazonaws.com/dev/login';

    return this.http.post(url, { id: id, password: password })
      .map(res => res.json())
      .catch(err => {
        return Observable.throw(err);
      })
  }

    getUsers(): any {
        let url = 'https://49t6art088.execute-api.eu-west-1.amazonaws.com/dev/friendsgetall';
        return this.http.get(url, {headers: this.headers})
            .toPromise().then(res => { return res.json(); })
            .catch(err => {
                return console.log(err);
            });
    }

//   register(user:User): Observable<any>{
//       let url = '';
//       this.headers.delete('Authorization');

//       return this.http.post(url, user, {headers: this.headers})
//         .map(res => res.json())
//         .catch(err => {
//             return Observable.throw(err);
//         })
//   }
}