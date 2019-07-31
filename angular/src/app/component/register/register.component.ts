import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user-model';
import { UserServiceService } from 'src/app/services/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: UserModel = new UserModel();
  registerForm: FormGroup;
  constructor(private snackBar: MatSnackBar,private httpservice:UserServiceService,private router : Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      { 
       'fname':new FormControl(this.user.fname,[Validators.minLength(4)]),
        'email':new FormControl(this.user.email,Validators.required),
        'password':new FormControl(this.user.password,[Validators.required,Validators.minLength(6)]),
        'address':new FormControl(this.user.address,Validators.required),

      }
    )
    
  }

  register(){
    console.log(this.user);
    
    this.httpservice.postRequest("users/register",this.user).subscribe(
      (response:any) => {
        if(response.statusCode === 1){
          console.log(response);
          this.snackBar.open(
            "Registered Successfully",
            "undo",
            {duration:2500}
          );
          this.router.navigate(['/login']);
        }else{
          console.log(response);
          this.snackBar.open(
            "Registration Failed",
            "undo",
            {
              duration:2500
            }
          )
        }

      }
    )
  }//registerEnd
}
