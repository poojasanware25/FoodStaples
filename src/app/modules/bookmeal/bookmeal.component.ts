import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Subscription } from 'rxjs';
import { Email } from 'src/app/classes/email';
import { MealData } from 'src/app/classes/meal-data';
import { UserMealData } from 'src/app/classes/user-meal-data';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-bookmeal',
  templateUrl: './bookmeal.component.html',
  styleUrls: ['./bookmeal.component.css']
})
export class BookmealComponent implements OnInit {
  mealtype: any = ['Snacks', 'Lunch', 'Dinner'];
  meals: any = ['Snacks', 'Lunch', 'Dinner'];
  Price: any = [];
  a: any = ["1200"]
  b: any = ["3000"];
  c: any = ["800"];
  ss: any = [];

  meal = new UserMealData();
  mail = new Email();
  discount: any;
  data: any;
  pricee: any;
 



  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: IDropdownSettings | any
  Snacks: any;
  Lunch: any;
  Dinner: any;


  constructor(private emp: CommonService, private router: Router, private fb: FormBuilder, private datePipe: DatePipe) { }
  lstmenu: MealData[] = [];


  //Error Display
  error: any = { isError: false, errorMessage: '' };
  isValidDate: any;


  ngOnInit(): void {

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




    this.createForm();
    this.discount = localStorage.getItem('discount');
    this.Snacks = localStorage.getItem('Snacks');
    this.Lunch = localStorage.getItem('Lunch');
    this.Dinner = localStorage.getItem('Dinner');
    //this.pricee = localStorage.getItem('dataa') as string;
    // console.log(this.pricee);
    //this.a=[this.pricee];

  }


  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  createForm() {
    this.bookmealfrm = this.fb.group({
      meal_dt: ['', Validators.required],
      end_dt: ['', Validators.required],
      meal_type: ['', Validators.required],
      price: ['', Validators.required],
      username: ['', Validators.required],
      subscription: ['', Validators.required]

    });
  }
  bookmealfrm = new FormGroup({
    meal_dt: new FormControl(),
    end_dt: new FormControl(),
    meal_type: new FormControl(),
    price: new FormControl(),
    username: new FormControl(),
    subscription: new FormControl()
    // date:new FormControl(),
  })


  bookMeal() {

    this.meal.meal_dt = this.datePipe.transform(this.meal.meal_dt, "YYYY-MM-dd");
    this.meal.end_dt = this.datePipe.transform(this.meal.end_dt, "YYYY-MM-dd");

    this.isValidDate = this.validateDates(this.meal.meal_dt, this.meal.end_dt);
    if (this.isValidDate) {


      this.meal.username = localStorage.getItem('username');
      console.log(this.meal.meal_type);
      // convert array to string
      var sArray: any = [];
      this.meal.meal_type.forEach(function (item: any) {
        sArray.push(item.item_text)
      })
      console.log(sArray);
      this.meal.meal_type = sArray.join(',');
      console.log(this.meal.meal_type);

      this.emp.bookMealFromRemote(this.meal).subscribe(
        data => {
          //  if (this.bookmealfrm.valid) {
          console.log(this.bookmealfrm.value);
          console.log("recevied");
          Swal.fire('Thank you', 'Your request has been sucessfully sent.', 'success');
          this.router.navigate(["dashboard"]);
          
          // }
        },
        error => {
         console.log("error");
         console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
           //this.msg=error.status;
           alert(error.error.status);
          Swal.fire('Error', error.error.status, 'error');

        }
      )
    }
  }


  updateprice(totalprice: any) {
    switch (totalprice) {
      case 'Snacks':
        this.Price = this.a
        break;

      case 'Lunch':
        this.Price = this.b
        break;

      case 'Dinner':
        this.Price = this.c
        break;
      default:
        this.Price = [];
        break;

    }
  }



  validateDates(sDate: string, eDate: string) {
    this.isValidDate = true;
    if ((sDate == null || eDate == null)) {
      this.error = { isError: true, errorMessage: 'Start date and end date are required.' };
      this.isValidDate = false;
    }

    if ((sDate != null && eDate != null) && (eDate) < (sDate)) {
      this.error = { isError: true, errorMessage: 'End date should not be less than start date.' };
      this.isValidDate = false;
    }
    return this.isValidDate;



  }
}
