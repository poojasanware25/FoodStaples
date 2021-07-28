import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserMealData } from '../classes/user-meal-data';
import { CommonService } from '../services/common.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common'
import Swal from 'sweetalert2';
declare var $:any;

@Component({
  selector: 'app-extenddate',
  templateUrl: './extenddate.component.html',
  styleUrls: ['./extenddate.component.css']
})



export class ExtenddateComponent implements OnInit {
  meal = new UserMealData();
  username: any;
  data: any;
  meal_id:any;

  
  editForm: FormGroup | any;
  isLoading = false;
  selectedUser: UserMealData |any;
  date: Date|any;


  planModel: any = {start_time: new Date() };
  constructor(private emp: CommonService, private router: Router, private route: ActivatedRoute,public modal: NgbActiveModal, private fb: FormBuilder,public datepipe: DatePipe) { }

  meallst:UserMealData[]=[];
  
  ngOnInit(): void {
    // this.meal_id = this.route.snapshot.params.meal_id;
 
     this.getMealData();
    this.setForm();
    this.username = localStorage.getItem('username');

    {
      this.date=new Date();
      let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
      console.log(latest_date,"date");
     }

    

  //    $(document).ready(function() {
  //     var date = new Date();
  
  //     let day:any = date.getDate();
  //      let month:any = date.getMonth() + 1;
  //    let  year:any = date.getFullYear();
  
  //     if (month < 10) month = "0" + month;
  //     if (day < 10) day = "0" + day;
  
  //     var today = year + "-" + month + "-" + day;       
  //      $("#theDate").attr("value", today);
    
  //     console.log(today);
      
  // });

  // $('#date').val(new Date().toJSON().slice(0,10));

  
}
  
  onSubmit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
  
    this.username=localStorage.getItem('username');
      console.log(this.editForm.value,"aa");
    this.emp.updateNews(this.username,this.meal).subscribe((data: UserMealData)=> {
      this.meal=data;
      console.log(this.meal,"meal")
      this.isLoading = false;
      Swal.fire('Success', 'Updated Successfully', 'success');
      this.modal.close('Yes');
    },
      error => {
        this.isLoading = false;
       // Swal.fire('Error', 'Something Went Wrong', 'error')
      });
  }
    // getMealData() {
    //   this.emp.getMealData(this.meal_id).subscribe(
    //     (res:any) => {
    //       console.log(res);
    //       this.data = res;
    //       this.meal = this.data;
    //     })
    // }

     get editFormData() { return this.editForm.controls; }

    private setForm() {
      console.log(this.selectedUser);
      
      this.editForm = this.fb.group({
        // [this.selectedUser.username]:localStorage.getItem('username'),
        meal_id: [this.selectedUser.meal_id],
        end_dt: [this.selectedUser.end_dt],
        username: [this.selectedUser.username]
       
      });
    }


    getMealData() {
      this.username = localStorage.getItem('username');
 
            this.emp.getMealData(this.username).subscribe((data) => {  
           // this.meal=data;
           console.log(data,"meal")});
        
         } 
 
  }


