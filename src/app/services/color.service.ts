import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import SingleResponseModel from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:7269/api/"

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>
  {
    let newApiUrl = this.apiUrl + "colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newApiUrl);
  }

  addColor(color:Color):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "colors/add", color);
  }

  updateColor(color:Color):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "colors/update", color);
  }

  getColorById(colorId:number):Observable<SingleResponseModel<Color>>
  {
    let newApiUrl = this.apiUrl + "colors/getcolorbyid?colorid=" + colorId
    return this.httpClient.get<SingleResponseModel<Color>>(newApiUrl);
  }
}