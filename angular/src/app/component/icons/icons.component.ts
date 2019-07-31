import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';
import { LabelService } from 'src/app/services/label.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteInfo
  labels:[];
  noteLabel:[];

  constructor(private noteService: NoteService,
     private snackBar: MatSnackBar,
      private dataService: DataService,
      private labelService:LabelService) { }

  ngOnInit() {
    console.log("=====", this.noteInfo);
    this.getAllLabel();
    this.getLabelsOfNote();
  }
  getLabelsOfNote(){
    console.log(this.noteInfo.noteId);
    
    this.noteService.getNoteLabels("notes/getNoteLabels?noteId="+this.noteInfo.noteId).subscribe(
    (response:any)=>{
    console.log("Label of Given Note++"+response);
    this.noteLabel=response;
    }
    )
    }


  onDelete() {
    this.noteService.deleteNote("notes?noteId=" + this.noteInfo.noteId).subscribe(
      (response) => {
        if (response.statusCode == 1) {
          this.dataService.changeMessage('delete');
          this.snackBar.open("Note Deleted", "close", { duration: 2500 })
        } else {
          this.snackBar.open("Note not deleted", "close", { duration: 2500 })
        }
      }
    )
  }

  addLabelToNote(label: any) {
    console.log("label id", this.noteInfo.noteId);
    console.log("Label Id = "+label.id);
    
    this.noteService.addLabelToNote("label/addLabelToNotes?labelId=" + label.id + "&noteId=" + this.noteInfo.noteId).subscribe(
      (response: any) => {
        if (response.statusCode == 1) {
          this.dataService.changeMessage("Label added to note");
          this.snackBar.open(response.statusMessage, "close", { duration: 2500 });
        } else {
          this.snackBar.open(response.statusMessage, "close", { duration: 2500 });
        }
      }
    )
  }

  getAllLabel(){

    this.labelService.displayLabel().subscribe(
      (Response:any)=>{
        this.labels=Response;
        console.log(this.labels)
      }
      )
  }

  onArchive(){
    this.noteService.isArchive("notes/archive?noteId="+this.noteInfo.noteId).subscribe(
      (response:any)=>{
        if (response.statusCode == 1) {
          this.dataService.changeMessage("Note Archive Sussecfully");
          this.snackBar.open(response.statusMessage, "close", { duration: 2500 });
          

        } else {
          this.snackBar.open(response.statusMessage, "close", { duration: 2500 });
        }
      }
    )
  }
}
