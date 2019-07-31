import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/app/model/note';
import { MatSnackBar } from '@angular/material/snack-bar';
import { log } from 'util';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  open:boolean;
  note:Note=new Note();

  constructor(private noteService:NoteService,private snackBar:MatSnackBar,private dataService:DataService) { }

  ngOnInit() {
    this.open=false;
  }

  onOpen(){
    this.open=true;
  }
  onClose(){
    this.open=false;
    console.log(this.note);
    if(this.note.noteTitle != null || this.note.discription != null){
      this.noteService.createNote(this.note).subscribe(
        (response)=>{
          log
          if(response.statusCode== 1){
            this.dataService.changeMessage('create');
            this.snackBar.open("Note Created","undo",{duration:5000})
          }else{
            this.snackBar.open("Note not Created","undo",{duration:5000})
          }
        }
        
      )
    }
    this.note.noteTitle=null;
    this.note.discription=null;
  }
}
