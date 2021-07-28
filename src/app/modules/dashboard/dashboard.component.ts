import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { UserFeedback } from 'src/app/classes/user-feedback';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  feedback = new UserFeedback();

  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:IDropdownSettings |any
  today:any;
  lastDayOfMonth:any;
  constructor(public modal: NgbActiveModal,private modalService: NgbModal) { }

   ngOnInit(): void {

     //last day of month
      this.today = new Date();
      this.lastDayOfMonth = new Date(this.today.getFullYear(), this.today.getMonth()+1, 0);
     console.log(this.lastDayOfMonth);

  //   // if(true){
  //   //   alert("");
  //   // }

    if(this.today==this.lastDayOfMonth){
      // alert("");
     this.Feedback();
    }


    
  
    }

   //popup for feedback
   Feedback() {
   const ref = this.modalService.open(FeedbackComponent, { centered: true });
  ref.result.then((yes:any) => {
      console.log("Yes Click");
 },
      (cancel:any) => {
        console.log("Cancel Click");

      }
      )
  }

}
