import { Component, OnInit } from '@angular/core';
import { LabelService } from 'src/app/services/label.service';
import { EditLabelComponent } from '../edit-label/edit-label.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  label = [];
  token: any;
  constructor(private labelService: LabelService,private dailog:MatDialog) { }


  ngOnInit() {
    this.displayAllLabels();
  }

  displayAllLabels() {
    this.token = localStorage.getItem('token');
    this.labelService.displayLabel().subscribe(
      (Response: any) => {
        this.label = Response;
        console.log(this.label);
      }
    )
  }

  
}
