import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Usrmast } from 'src/app/classes/usrmast';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new Usrmast();

  constructor(public emp: CommonService, public router: Router, private fb: FormBuilder) { }

  CheckUser() {
    this.router.navigate(["dashboard"]);
  }

  ngOnInit(): void {
  }
  loginfrm = new FormGroup({
    uname: new FormControl(),
    pwd: new FormControl(),
    first_name: new FormControl(),
    role: new FormControl(),
    username: new FormControl()
  })

  loginUser(){
    this.emp.loginUserFromRemote(this.user).subscribe(
      
      data => {
        this.router.navigate(["dashboard"]);
        localStorage.setItem("uname", this.loginfrm.value["uname"]);
        localStorage.setItem("pwd", this.loginfrm.value["pwd"]);
        localStorage.setItem("first_name",data.firstname);
        localStorage.setItem("role",data.user_type);
        localStorage.setItem("username",data.username);
        localStorage.setItem("discount",data.discount);
        localStorage.setItem("last_name",data.lastname);
        localStorage.setItem("email",data.email);


        console.log("received");
        console.log(data.firstname);
        console.log(data.user_type);
        console.log(data.username);
      
      },
      error => {
        console.log("error");
      
      }
      
    )
    
    }

}
