import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnergyService {
  constructor(private http: HttpClient) { }
  private energyApi: string = 'https://ev6stwgdh6.execute-api.us-west-2.amazonaws.com/default/getEnergyTable';
  private updateShadow:string = 'https://ad6c1fgo5bjd8-ats.iot.us-west-2.amazonaws.com/things/Raspberry_pi3/shadow?name=shadowName';
  private upShadowOn1:string = 'http://192.168.43.60/piapp/?status=on1';
  private upShadowOff1:string = 'http://192.168.43.60/piapp/?status=off1';
  private upShadowOn2:string = 'http://192.168.43.60/piapp/?status=on2';
  private upShadowOff2:string = 'http://192.168.43.60/piapp/?status=off2';
  private upShadowOn3:string = 'http://192.168.43.60/piapp/?status=on3';
  private upShadowOff3:string = 'http://192.168.43.60/piapp/?status=off3';

  
  getEngergy():Observable<any> {
  return this.http
  .get<any>(this.energyApi)
  .pipe(
    map(res => {
      return res;
    })
  )
};

  ShadowOn1():Observable<any>{
    return this.http
    .get<any>(this.upShadowOn1)
    .pipe(
      map(result => {
        return result;
    }))
  }
  ShadowOff1():Observable<any>{
    return this.http
    .get<any>(this.upShadowOff1)
    .pipe(
      map(result => {
        return result;
    }))
  }
  //shadow2
  ShadowOn2():Observable<any>{
    return this.http
    .get<any>(this.upShadowOn2)
    .pipe(
      map(result => {
        return result;
    }))
  }
  ShadowOff2():Observable<any>{
    return this.http
    .get<any>(this.upShadowOff2)
    .pipe(
      map(result => {
        return result;
    }))
  }
  //shadow3
  ShadowOn3():Observable<any>{
    return this.http
    .get<any>(this.upShadowOn3)
    .pipe(
      map(result => {
        return result;
    }))
  }
  ShadowOff3():Observable<any>{
    return this.http
    .get<any>(this.upShadowOff3)
    .pipe(
      map(result => {
        return result;
    }))
  }
}
