import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageAirlineService {

  constructor(private http:HttpClient) { }

  addFlight(airlineData:any) {
    console.log("airlineData",airlineData);
    return this.http.post<any>('http://localhost:3000/flights',airlineData,
    { observe: 'response' }).pipe(res => {
      return res;
    });
  }
  updateFlight(airlineData:any) {
    console.log("airlineData",airlineData);
    let endpoint="http://localhost:3000/flights/"+airlineData.id;
    return this.http.put<any>(endpoint,airlineData,
    { observe: 'response' }).pipe(res => {
      return res;
    });
  }
}
