 import { Injectable } from '@angular/core';
 import { Http, Headers } from '@angular/http';
 import { CanActivate } from '@angular/router';
 import { Router } from '@angular/router';

 @Injectable()
 export class LocationService {

 constructor(
     private http: Http,   
     private router:Router) {}

    getCoordinates(): any {

        let url = 'https://maps.googleapis.com/maps/api/geocode/outputFormat?parameters';

        return this.http.get(url)
            .toPromise().then(res => { return res.json(); })
            .catch(err => {
                return console.log(err);
            });
    }

}