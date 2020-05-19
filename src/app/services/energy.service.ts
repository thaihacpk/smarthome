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
  
  getEngergy():Observable<any> {
  return this.http
  .get<any>(this.energyApi)
  .pipe(
    map(res => {
      return res;
    })
  )
}

}
