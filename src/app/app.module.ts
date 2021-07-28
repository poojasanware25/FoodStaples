import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { DashboardcontentComponent } from './modules/dashboardcontent/dashboardcontent.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookmealComponent } from './modules/bookmeal/bookmeal.component';
import { PagenotfoundComponent } from './modules/pagenotfound/pagenotfound.component';
import { ExtenddateComponent } from './extenddate/extenddate.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookingDetailsComponent } from './modules/booking-details/booking-details.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { FeedbackComponent } from './modules/feedback/feedback.component';
import { DatePipe } from '@angular/common';
import { UserbillComponent } from './modules/userbill/userbill.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ProfileComponent } from './modules/profile/profile.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './modules/reset-password/reset-password.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    DashboardcontentComponent,
    DashboardComponent,
    BookmealComponent,
    PagenotfoundComponent,
    ExtenddateComponent,
    BookingDetailsComponent,
    FeedbackComponent,
    UserbillComponent,
    ProfileComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgMultiSelectDropDownModule.forRoot(),
    [MdbCheckboxModule],
    MatNativeDateModule,
    MatDatepickerModule,
   
    
    
  ],
  providers: [  DatePipe,NgbActiveModal,],
  bootstrap: [AppComponent]
})
export class AppModule { }
