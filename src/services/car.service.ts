import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { CarResponseModel } from 'src/models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:7269/api/cars/getcardetails"

  
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponseModel>
  {
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
}
