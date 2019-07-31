import { Component, OnInit } from '@angular/core';
import { Label } from 'src/app/model/label';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LabelService } from 'src/app/services/label.service';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateLabelComponent } from '../update-label/update-label.component';

@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.scss']
})
export class EditLabelComponent implements OnInit {

  label: Label = new Label();
  labels: any[];
  message: string;
  labelName = new FormControl(this.label.labelName);
  data: any;

  constructor(private snackbar: MatSnackBar, private labelService: LabelService,
    private dataService: DataService,private dailog:MatDialog) { }

  ngOnInit() {
    this.getAllLabels();
  }

  onClose() {
    if (this.label.labelName != null) {
      this.labelService.createLabel("label/create", this.label).subscribe(
        (Response: any) => {
          if (Response.statusCode == 1) {
            this.dataService.changeMessage("label");
            this.snackbar.open(Response.statusMessage, "undo", { duration: 2500 });
          }
          else {
            this.snackbar.open(Response.statusMessage, "close", { duration: 2500 })
          }
        }
      )
    }
    else {
      this.snackbar.open("Label Cannot Be Empty", "close", { duration: 2500 })
    }
    this.dailog.closeAll();
  }
  getAllLabels() {
    this.labelService.displayLabel().subscribe(
      (Response: any) => {
        this.labels = Response;
        console.log("labels on dashboard-->", Response);
      }
    )
  }

  onEditLabelDailog(data:any){
    this.dailog.open(UpdateLabelComponent,
      {
  
        height:'300px',
        width:'200px',
        data:{
          id:data.id
        }
    
      })
  }
}
