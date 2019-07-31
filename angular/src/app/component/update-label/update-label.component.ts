import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LabelService } from 'src/app/services/label.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { Label } from 'src/app/model/label';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-label',
  templateUrl: './update-label.component.html',
  styleUrls: ['./update-label.component.scss']
})
export class UpdateLabelComponent implements OnInit {

  label: Label = new Label();
  labels: any[];
  message: string;
  labelName = new FormControl(this.label.labelName);
  //data: any;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private snackbar: MatSnackBar, private labelService: LabelService,
    private dataService: DataService,private dailog:MatDialog) { }
id=this.data.id
  ngOnInit() {

  }

  onClose() {
    if (this.label.labelName != null) {
      this.labelService.updateLabel("label/update?labelId="+this.id, this.label).subscribe(
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
    this.dailog.closeAll();
  }
 
}
