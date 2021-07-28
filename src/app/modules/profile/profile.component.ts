import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
username:any;
first_name:any;
last_name:any;
role:any;
email:any;
discount: any;
  constructor() { }

  ngOnInit(): void {
   this.username=localStorage.getItem("username");
   this.first_name=localStorage.getItem("first_name");
  this.last_name=localStorage.getItem("last_name");
   this.role=localStorage.getItem("role");
   this.email=localStorage.getItem("email");
   this.discount=localStorage.getItem("discount");
  }

}
