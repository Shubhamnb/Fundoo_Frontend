import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  
  
  isArchive(url) {
    return this.httpService.putRequest(url,'');
  }
  getNoteLabels(url) {
    return this.httpService.getRequest(url);
  }
  addLabelToNote(url) {
    return this.httpService.postRequest(url,'');
  }

  constructor(private httpService:HttpService) { }

    public createNote(data:any):any{
      return  this.httpService.postRequest("notes/createNote",data);
    }

    public getNotes(){
      return this.httpService.getRequest("notes/getAllNotes");
    }

    public deleteNote(url){
      return  this.httpService.deleteRequest(url);
    }

    public updateNote(url:any,data:any){
      return this.httpService.putRequest(url,data);
    }
}
