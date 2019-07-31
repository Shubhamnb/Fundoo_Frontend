import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Password } from 'src/app/model/password';
//import { ActivatedRoute } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  password:Password = new Password();
  resetForm : FormGroup;
  token:string;
 
  
  constructor(private router : Router,private snackBar: MatSnackBar,private route : ActivatedRoute,private formBuilder:FormBuilder,private httpservice:UserServiceService) { }
  



  ngOnInit() {
    this.resetForm = this.formBuilder.group(
      {
        'newPassword': new FormControl(this.password.newPassword,[Validators.required,Validators.minLength(6)]),
        'confNewPassword': new FormControl(this.password.confNewPassword,[Validators.required,Validators.minLength(6)])
      }
      
    ) 
    this.token = this.route.snapshot.paramMap.get('token');
    console.log('Shubham - IND_JAVA_OP '+this.token);
  }
  
  onSubmit(){
    if(this.password.newPassword != this.password.confNewPassword) throw "Password and Confirm Password does not match";
    if(this.password.newPassword === '' || this.password.confNewPassword === '') throw "Empty fields";


    this.httpservice.putRequest("users/resetPassword/"+this.token,this.password).subscribe(
      (response:any) => {
      console.log('response',response);
      if(response.statusCode === 1){
      console.log(response);
      this.snackBar.open(
      "Password reset Successfully",
      "undo",
      {duration:2500}
      )
      this.router.navigate(['/login'])
      }else{
      console.log(response);
      this.snackBar.open(
      "Password reset Failed",
      "undo",
      {duration:2500}
      )
      }
      }
      )
  }
}
