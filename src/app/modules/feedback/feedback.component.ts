import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { UserFeedback } from 'src/app/classes/user-feedback';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  
  feedback = new UserFeedback();

  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:IDropdownSettings |any
  today:any;
  lastDayOfMonth:any;
  constructor(private emp: CommonService, private router: Router, private fb: FormBuilder,public modal: NgbActiveModal) { }

  ngOnInit(): void {
    this.createForm();

    // if(1==1){
    //   this.Feedback();
    // }
    //last day of month
     this.today = new Date();
 this.lastDayOfMonth = new Date(this.today.getFullYear(), this.today.getMonth()+1, 0);
console.log(this.lastDayOfMonth);
console.log(this.today,"today");
console.log(this.today==this.lastDayOfMonth);
  
//multiselect
    this.dropdownList = [
      
      { item_id: 1, item_text: 'Snacks' },
      { item_id: 2, item_text: 'Lunch' },
      { item_id: 3, item_text: 'Dinner' },
     
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Dinner' },
   
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };


  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


  createForm() {
    this.feedbackfrm = this.fb.group({
      feedback: ['', Validators.required],
      meal_type: ['', Validators.required],
      rating: ['', Validators.required]
    });
  }


  feedbackfrm = new FormGroup({
    feedback: new FormControl(),
    meal_type: new FormControl(),
    rating: new FormControl()
  })


  
  Feedback() {
    this.feedback.username = localStorage.getItem('username');
//convert array to string(multiselect)
    var sArray:any = [];
    this.feedback.meal_type.forEach(function(item:any){
    sArray.push(item.item_text)
    })
    console.log(sArray);
    this.feedback.meal_type  = sArray.join(',');
    console.log(this.feedback.meal_type);
    this.emp.userFeedback(this.feedback).subscribe(

      data => {
        console.log("recevied");
        Swal.fire('Success', 'Thank you for your valuable feedback', 'success');
        //this.router.navigate(["dashboard"]);
        //this.isLoading = false;
        this.modal.close('Yes');
      },
      error => {
        console.log("error");
       Swal.fire('Error', 'Something Went Wrong', 'error');

      }
    )

  }
}
