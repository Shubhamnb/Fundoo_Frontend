import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  
  constructor(private httpService:HttpService) { }

  updateLabel(url,data) {
    return this.httpService.putRequest(url,data);
  }

  createLabel(url,data) {
    return this.httpService.postRequest(url,data);
  }

  

  public displayLabel(){
    return this.httpService.getRequest("label/retrive");
  }
}
