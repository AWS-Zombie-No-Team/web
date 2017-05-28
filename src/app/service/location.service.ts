 import { Injectable } from '@angular/core';
 import { CanActivate } from '@angular/router';

 @Injectable()
 export class LocationService {
  constructor() {}

  getCoordinates(): any {
    if(navigator.geolocation) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((res: any) => {
          resolve({
            lat: res.coords.latitude,
            lon: res.coords.longitude,
          });
        }, (err: any) => {
          reject(err);
        });
      });
    }
  }
}
