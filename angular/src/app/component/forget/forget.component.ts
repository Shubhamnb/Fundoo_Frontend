import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  email : string;
  constructor(private snackBar: MatSnackBar,private httpservice:UserServiceService,private router : Router,private formBuilder:FormBuilder) { }
  forgetForm = new FormGroup({
    email : new  FormControl('',[Validators.required,Validators.email])
  })

  ngOnInit() {
  }

  submit(){
    console.log('Email :',this.email);

    this.httpservice.postRequest("users/forgetPassword?email="+this.email,"").subscribe(  (response:any) => {
      if(response.statusCode === 1){
        console.log(response);
        this.snackBar.open(
          "Change password link send on your mail",
          "undo",
          {duration:5000}
        );
        this.router.navigate(['/forget']);
      }else{
        console.log(response);
        this.snackBar.open(
          "Invalid Email",
          "undo",
          {
            duration:5000
          }
        )
      }

    }
  )
  }
}
