import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userbill } from 'src/app/classes/userbill';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-userbill',
  templateUrl: './userbill.component.html',
  styleUrls: ['./userbill.component.css']
})
export class UserbillComponent implements OnInit {
  bill = new Userbill();
  username2: any;
  constructor(private emp: CommonService, private router: Router) { }
  lstbill: Userbill[] = [];
  mapped: any;


  ngOnInit(): void {
    this.getUserBill();
    this.username2 = localStorage.getItem('username');
  }

  getUserBill() {
    this.username2 = localStorage.getItem('username');

    this.emp.getUserBill(this.username2).subscribe((data: Userbill) => {
      this.bill = data;
      console.log(this.bill, "bill")
    });

  }


}


