import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usrmast } from 'src/app/classes/usrmast';
import { CommonService } from 'src/app/services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

user= new Usrmast();
 password:any;
 token:any;
 public showSuccess: boolean|any;
 public showError: boolean|any;
 public errorMessage: string|any;
  constructor(public emp: CommonService, public router: Router, private fb: FormBuilder, private _route: ActivatedRoute) { }


  createForm() {
    this.loginfrm = this.fb.group({
    password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
     
    });
  }
  ngOnInit(): void {
    this.token = this._route.snapshot.queryParams['token'];
    this.createForm();
  }

  loginfrm = new FormGroup({
   password: new FormControl(),
   
  })

  loginUser(){
    console.log(this.user.password);
    console.log(this.token);
    this.password=this.user.password;
    this.emp.resetPassword(this.password,this.token).subscribe(
      
      data => {
        this.showSuccess = true;
        },
      error => {
    //     this.showError = true;
    // this.errorMessage = "please enter password ";
    console.log("error");
    
      
      }
      
    )
    
    }
}
