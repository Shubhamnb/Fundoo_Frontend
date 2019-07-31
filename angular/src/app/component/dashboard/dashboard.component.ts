import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LabelService } from 'src/app/services/label.service';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { MatDialog } from '@angular/material/dialog';
import { EditLabelComponent } from '../edit-label/edit-label.component';
import { UpdateLabelComponent } from '../update-label/update-label.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  apptitle:string;
  labels:[];
  image:string;
  constructor(private dataService:DataService,
    private httpService:HttpService,
    private labelService:LabelService,
    private router : Router,
    private dialog:MatDialog) { }
  message:string;
  ngOnInit() {
    this.apptitle="FundooNotes";
    this.dataService.currentMessage.subscribe(
      message=>{;this.message=message,this.getAllLabels()}
    )

    this.httpService.getRequest("users/getImage").subscribe(
      (response:any)=>{
      console.log("Shubham "+response);
      
      this.image=response
      
      }
      )
      
  }
  getAllLabels(){
    this.labelService.displayLabel().subscribe(
      (Response:any)=>{
        this.labels=Response;
      }
    )
  }
logout(){
  localStorage.clear();
  this.router.navigate(['/login']);
}

openDialogLabel(){
this.dialog.open(EditLabelComponent,
  {
    height:'300px',
    width:'200px'

  })
}

onEditLabelDailog(data:any){
  this.dialog.open(UpdateLabelComponent,
    {

      height:'300px',
      width:'200px',
      data:{
        id:data.id
      }
  
    })
}
showArchive(){
  this.router.navigate(['dashboard/archive']);
}

showNote(){
  this.router.navigate(['dashboard']);
}
}
