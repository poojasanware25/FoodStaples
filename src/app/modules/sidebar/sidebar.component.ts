import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserMealData } from 'src/app/classes/user-meal-data';
import { ExtenddateComponent } from 'src/app/extenddate/extenddate.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackComponent } from '../feedback/feedback.component';
import { DatePipe, NgIf } from '@angular/common'
import { CommonService } from 'src/app/services/common.service';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  xyz: any;
  role: any;
  uname: any;
  username:any;
  meal = new UserMealData();
  date: Date|any;
  today:any;
  lastDayOfMonth:any;
  constructor(private emp: CommonService,private router: Router,private modalService: NgbModal,public datepipe: DatePipe) { }
  

  ngOnInit(): void {

    this.getDaysLeft();

    $(".hamburger").click(function(){
      $(".wrapper").toggleClass("active")
    })

    this.xyz = localStorage.getItem('first_name');
    this.role = localStorage.getItem('role');
    this.uname = localStorage.getItem('uname');
    this.username = localStorage.getItem('username');
    console.log(this.uname);

   
  // {
  //   this.date=new Date();
  //   let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
  //   console.log(latest_date,"date");
  //  }


    //last day of month
    this.today = new Date();
 this.lastDayOfMonth = new Date(this.today.getFullYear(), this.today.getMonth()+1, 0);
console.log(this.lastDayOfMonth);
console.log(this.today==this.lastDayOfMonth);
  // if(today==lastDayOfMonth)
  // {
  //   this.BookMeal();
  // }
  }



  LogoutUser() {
    localStorage.clear();
    console.log("logout successfull")
    this.router.navigate(["login"]);
  }
  BookMeal() {
    this.router.navigate(["bookmeal"]);
  }
  UpdateDt(){
    this.router.navigate(["extenddate"]);
  }
  Dashboard() {
    this.router.navigate(["dashboard"]);
  }
  Details() {
    this.router.navigate(["bookingdetails"]);
  }
  // Feedback() {
  //   this.router.navigate(["feedback"]);
  // }

  Bill() {
    this.router.navigate(["userbill"]);
  }




//pop up
  editItem(meal_id: UserMealData) {
    // this.router.navigateByUrl(`EditUser/${userModel.id}`);
    // this.router.navigate(["extenddate/{{username}}"]);
    console.log(meal_id,"id");
    const ref = this.modalService.open(ExtenddateComponent, { centered: true });
    ref.componentInstance.selectedUser = meal_id;

    ref.result.then((yes:any) => {
      console.log("Yes Click");

      // this.setUsersList();
    },
      (cancel:any) => {
        console.log("Cancel Click");

      })
  }



 


  // //popup for feedback
  // Feedback() {
   
    
  //   const ref = this.modalService.open(FeedbackComponent, { centered: true });
  
  //   ref.result.then((yes:any) => {
  //     console.log("Yes Click");

  //     // this.setUsersList();
  //   },
  //     (cancel:any) => {
  //       console.log("Cancel Click");

  //     })
  // }



  
  //Get days on Booking expiry

  getDaysLeft() {
    this.username = localStorage.getItem('username');
     this.emp.getDaysleft(this.username).subscribe((data: UserMealData) => {  
           this.meal=data;
         console.log(this.meal,"daysleft")});
      
       }   

}
