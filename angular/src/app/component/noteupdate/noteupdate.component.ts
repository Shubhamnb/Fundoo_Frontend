import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';
import { Note } from 'src/app/model/note';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-noteupdate',
  templateUrl: './noteupdate.component.html',
  styleUrls: ['./noteupdate.component.scss']
})
export class NoteupdateComponent implements OnInit {
  note:Note = new Note();
  open:boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private noteService:NoteService,
              private snackBar:MatSnackBar,
              private dataService:DataService,
              private router:Router,
              private dailog:MatDialog
              ) { }
  title = new FormControl(this.data.noteTitle);
  description = new FormControl(this.data.discription);
  ngOnInit() {
    this.open=true;
  }
  
  
  
  


  onUpdate(){
    console.log(this.note);
    
    this.note={
      "noteTitle":this.title.value,
      "discription":this.description.value      
    }
    
    this.noteService.updateNote("notes/updateNote?noteId="
        +this.data.noteId,this.note).subscribe(
      (response)=>{
        console.log(response);
        
        if(response.statusCode==1){
          this.dataService.changeMessage('update');
          this.snackBar.open("Note Upadted","close",{duration:2500})
        }else{
          this.snackBar.open("Note not update","close",{duration:2500})
        }}
    )
    this.dailog.closeAll();
  }
  
}
