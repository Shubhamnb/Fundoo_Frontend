import { Component, OnInit } from '@angular/core';
import { NoteupdateComponent } from '../noteupdate/noteupdate.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-only-note',
  templateUrl: './only-note.component.html',
  styleUrls: ['./only-note.component.scss']
})
export class OnlyNoteComponent implements OnInit {
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
