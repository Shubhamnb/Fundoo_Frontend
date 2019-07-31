import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/note.service';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { NoteupdateComponent } from '../noteupdate/noteupdate.component';
import { Note } from 'src/app/model/note';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  notes : any[]

  constructor(private snackbar:MatSnackBar,private noteService:NoteService,
  private dataService:DataService,public dialog:MatDialog) { }
  
  message:string;
  ngOnInit() {
  this.dataService.currentMessage.subscribe(
  message=>{this.message=message,this.getAllNotes()}
  )
  // this.getAllNotes();
  }
  getAllNotes() {
  this.noteService.getNotes().subscribe(
  (Response:any)=>{
  console.log("get response==>",Response);
  this.notes=Response;
  }
  )
  }


  onUpdateDailog(note:any){
    
    this.dialog.open(NoteupdateComponent,{
      height:'200px',
      width:'460px',
      data:{
        noteId:note.noteId,
         noteTitle:note.noteTitle,
         discription:note.discription
      }
    });  
  }
}
