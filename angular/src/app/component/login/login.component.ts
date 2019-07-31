import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginModel } from 'src/app/model/login-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginuser: LoginModel = new LoginModel();
  loginForm :  FormGroup;
  token: string;
  constructor(private snackBar: MatSnackBar,private httpservice:UserServiceService,private router : Router,private formBuilder:FormBuilder) { }
  
  ngOnInit() {
    this.loginForm = new FormGroup({
    email : new FormControl(this.loginuser.email,Validators.required),
    passWord : new FormControl(this.loginuser.passWord,[Validators.required,Validators.minLength(6)])
  });
  }

  login(){
    this.token = localStorage.getItem('token');
    console.log(this.loginuser);
    this.httpservice.postRequest("users/login",this.loginuser).subscribe(
      (response:any) => {
        if(response.statusCode === 1){
          console.log(response);
          localStorage.setItem('token', response.token);
          localStorage.setItem('email', this.loginuser.email);
          this.snackBar.open(
            "Login Successfully",
            "undo",
            {duration:2500}
          );
          this.router.navigate(['/dashboard']);
        }else{
          console.log(response);
          this.snackBar.open(
            "Invalid Credential",
            "undo",
            {
              duration:2500
            }
          )
        }

      }
    )
  }

  forget(){
    this.router.navigate(['/forget']);
  }
}
