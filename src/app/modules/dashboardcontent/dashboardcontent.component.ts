import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Announcement } from 'src/app/classes/announcement';
import { MealData } from 'src/app/classes/meal-data';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserMealData } from 'src/app/classes/user-meal-data';
@Component({
  selector: 'app-dashboardcontent',
  templateUrl: './dashboardcontent.component.html',
  styleUrls: ['./dashboardcontent.component.css']
})
export class DashboardcontentComponent implements OnInit {
  news = new Announcement();
  menu = new MealData();
  status = new UserMealData();
  errorMessage: any;

  constructor(private emp: CommonService, private router: Router) { }
  lstnews: Announcement[] = [];
  lstmenu: MealData[] = [];
  mealprice: any;
  username: any;

  ngOnInit(): void {
    this.getAllNews();
    this.getAllMenu();
     this.getStatus();

   }


  getAllNews() {
    this.emp.getAllNews().subscribe(
      data => {
        this.lstnews = data;
      }
    );
  }

  getAllMenu() {

    // var dataa:any =[
    //   // {"text":"demo1"},
    //   // {"text":"demo2"}
    //   ]
    //   var sArray:any = [];
    //   dataa.forEach(function(item:any){
    //   sArray.push(item.meal_type)
    //   })

    //   var myString  = sArray.join(',');
    //   console.log(myString)




    this.emp.getAllMenu().subscribe(
      data => {
        localStorage.setItem("Snacks", data[0].price);
        localStorage.setItem("Lunch", data[1].price);
        localStorage.setItem("Dinner", data[2].price);
        this.lstmenu = data;

        //   localStorage.setItem("dataa", JSON.stringify(data));

        //   this.mealprice = (localStorage.getItem('dataa') as string);
        // console.log("maelprice",this.mealprice);
        console.log('menu', this.lstmenu);

        //   data.forEach(function(value:any, index:any){
        //     // do your job
        //     console.log(value, index);
        //  });






        //    const someArray: {meal_type: string,price:string}[] = [
        //     data.forEach(function(item:any){
        //       someArray.push(item.meal_type,item.price)

        //     })
        // ];
        // console.log(someArray,'someArray');







      }
    );
  }



  //Get Booking Status

  getStatus() {
    this.username = localStorage.getItem('username');
    this.emp.getStatus(this.username).subscribe((data: UserMealData) => {
      this.status = data;
      console.log(this.status, "status")
    });

  }


}
