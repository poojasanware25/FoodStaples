import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usrmast } from 'src/app/classes/usrmast';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  user= new Usrmast();
  email:any;
  public successMessage: any;
  public errorMessage: any;
  public showSuccess: boolean|any;
  public showError: boolean|any;
  constructor(public emp: CommonService, public router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  loginfrm = new FormGroup({
    email: new FormControl("", [Validators.required])
  })

  public validateControl = (controlName: string) => {
    return this.loginfrm.controls[controlName].invalid && this.loginfrm.controls[controlName].touched
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.loginfrm.controls[controlName].hasError(errorName)
  }

  loginUser(){
    console.log(this.user.email);
    this.email=this.user.email;
    this.emp.forgotPassword(this.email).subscribe(
      
      data => {
        this.showSuccess = true;
        this.successMessage = 'The link has been sent, please check your email to reset your password.'
        },
      error => {
        this.showError = true;
        this.errorMessage = "Invalid Request";
      
      }
      
    )
    
    }

}
