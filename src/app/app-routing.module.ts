import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DashboardcontentComponent } from './modules/dashboardcontent/dashboardcontent.component';
import { LoginComponent } from './modules/login/login.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { BookmealComponent } from './modules/bookmeal/bookmeal.component';
import { CanactivateGuard } from './guards/canactivate.guard';
import { PagenotfoundComponent } from './modules/pagenotfound/pagenotfound.component';
import { ExtenddateComponent } from './extenddate/extenddate.component';
import { BookingDetailsComponent } from './modules/booking-details/booking-details.component';
import { FeedbackComponent } from './modules/feedback/feedback.component';
import { UserbillComponent } from './modules/userbill/userbill.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './modules/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { component: LoginComponent, path: "login" },
  { component: SidebarComponent, path: "sidebar", canActivate: [CanactivateGuard] },
  { component: DashboardcontentComponent, path: "dashboardcontent", canActivate: [CanactivateGuard] },
  { component: DashboardComponent, path: "dashboard" },
  { component: BookmealComponent, path: "bookmeal"},
  { component: ExtenddateComponent, path: "bookingdetails/extenddate/:meal_id", canActivate: [CanactivateGuard] },
  { component: BookingDetailsComponent, path: "bookingdetails"},
  { component: FeedbackComponent, path: "feedback"},
  { component: UserbillComponent, path: "userbill"},
  { component: ProfileComponent, path: "profile"},
  { component: ForgotPasswordComponent, path: "forgotpassword"},
  { component: ResetPasswordComponent, path: "resetpassword"},
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
