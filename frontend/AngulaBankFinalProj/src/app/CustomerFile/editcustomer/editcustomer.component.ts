import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../Customer Service/customer.service';
import { ICustomer } from '../../Interfaces/ICustomer';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
  customer: ICustomer;
  param: any;
  accNo : any;
  accountNumber:any;
  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) {
    this.customer = {
    }
  }

  editCustomerHandler(data: any) {

    this.customer.custEmail = data.email;
    this.customer.custOccupation = data.occupation;
    this.customer.custPhoneNo = data.phone;
    console.log("customer email "+this.customer.custEmail);
    console.log("customer occupation "+this.customer.custOccupation);
    console.log("customer phone "+this.customer.custPhoneNo);
    console.log("acc no " + data.accountNumber)

    this.accountNumber = sessionStorage.getItem('loginId')
    this.customerService.editCustomer(this.accountNumber, this.customer) //1052806883
      .subscribe((data: any) => {
        console.log(data.custPassword)
        this.router.navigate(['customer/details'])
      })
  }

  set setAccountNumber(param: any){
    console.log("setter call")
    this.accNo = param;
  }

  get getAccountNumber(){
    return this.accNo
  }

  ngOnInit(): void {
    console.log("Inside ng init");
    this.param = this.route.snapshot.paramMap.get('accountNumber')
    this.setAccountNumber = this.param;
    console.log("Param value " + this.param);
    this.customerService.getCustomerById(this.param)
      .subscribe((data: any) => {
        this.customer = data;
        console.log(this.customer)
      })
  }

}
