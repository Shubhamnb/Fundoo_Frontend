import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from '../../services/note.service';
import { NoteupdateComponent } from '../noteupdate/noteupdate.component';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

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
