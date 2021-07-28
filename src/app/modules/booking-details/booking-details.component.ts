import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UserMealData } from 'src/app/classes/user-meal-data';
import { ExtenddateComponent } from 'src/app/extenddate/extenddate.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  username2: any;
  meal = new UserMealData();
  constructor(private emp: CommonService, private router: Router, private modalService: NgbModal) { }
  lstmenu: UserMealData[] = [];

  ngOnInit(): void {
    this.getBookingDetails();
    this.username2 = localStorage.getItem('username');
  }

  getBookingDetails() {
    this.emp.getBookingDetails().subscribe(
      data => {
        this.lstmenu = data;

      }
    );
  }


  // //pop up
  // editItem(meal: UserMealData) {
  //   // this.router.navigateByUrl(`EditUser/${userModel.id}`);
  //   // this.router.navigate(["extenddate/{{username}}"]);
  //   const ref = this.modalService.open(ExtenddateComponent, { centered: true });
  //   ref.componentInstance.selectedUser = this.meal;


  //   ref.result.then((yes:any) => {
  //     console.log("Yes Click");

  //     // this.setUsersList();
  //   },
  //     (cancel:any) => {
  //       console.log("Cancel Click");

  //     })
  // }
}
