import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Usrmast } from '../classes/usrmast';
import { Observable, throwError } from 'rxjs';
import { UserMealData } from '../classes/user-meal-data';
import { UserFeedback } from '../classes/user-feedback';


const baseUrl = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 

  constructor(private _http: HttpClient, private router: Router) { }

   //login api
   public loginUserFromRemote(user: Usrmast):Observable<any> {
    return this._http.post<any>(baseUrl+`users/login`, user);
  }

   //book meal api
   public bookMealFromRemote(meal: UserMealData):Observable<any> {
    return this._http.post<any>(baseUrl+`usermeal/add`, meal);
  }

  // update  date api
  // extendDate(meal_id: UserMealData):Observable<any> {
  //   return this._http.put("http://localhost:8080/usermeal/{meal_id}" , meal_id);
  // }

 // get mealData by username
  getMealData(username: string){
    return this._http.get(baseUrl+`usermeal/getByUsername/`+ username);
  }
  //get announcement api
  getAllNews():Observable<any>{
    return this._http.get(baseUrl+`news/all`);
  }

   //get menu api
   getAllMenu():Observable<any>{
    return this._http.get(baseUrl+`menu/all`);
  }

  //get bookingdetails api
  getBookingDetails():Observable<any>{
    return this._http.get(baseUrl+`usermeal/all`);
  }

   //feedback api
   public userFeedback(feedback: UserFeedback):Observable<any> {
    return this._http.post<any>(baseUrl+`feedback/add`, feedback);
  }


 //update news api
  // updateNews(meal: UserMealData):Observable<any> {
  //   return this._http.put("http://localhost:8080/usermeal/update/" , meal);
  // }


  //get userbill api
  // getUserBill():Observable<any>{
  //   let params1 = new HttpParams().set("username","AIT-1")
  //   return this._http.get("http://localhost:8080/userBill/generateUserBill",{params:params1});
   
  // }


  // getUserBill(username:Userbill):Observable<any>{
  //   return this._http.get("http://localhost:8080/userBill/generateUserBill"+ 'username');
   
  // }


  ///generate bill api
getUserBill(username:String):Observable<any>{
  return this._http.get(baseUrl+`userBill/generateUserBill/`+username);
  
}


 //Extend date api
 updateNews(username:String,data:UserMealData):Observable<any> {
  return this._http.put(baseUrl+`usermeal/update/`+username , data);
}


//Booking Status
  getStatus(username:String):Observable<any>{
    return this._http.get(baseUrl+`usermeal/latest/`+username);
    
  }



  //forgot password
  // public forgotPassword(email:String):Observable<any> {
  //   let params1 = new HttpParams().set("email","springtesting2021@gmail.com")
  //   return this._http.post<any>("http://localhost:8080/forgot_password?"+params1,{params:params1});
  // }

//forgot password
  public forgotPassword(email:String):Observable<any> {
    return this._http.post<any>(baseUrl+`forgot_password?email=`+email,email);
  }
  //reset password
  public resetPassword(password:String,token:String):Observable<any> {
    return this._http.post<any>(baseUrl+"reset_password?token="+token+"&password=" +password,password);
  }


  
  //Days Left on booking expiry
  getDaysleft(username:String):Observable<any>{
    return this._http.get(baseUrl+`usermeal/daysleft/`+username);
    
  }
}
