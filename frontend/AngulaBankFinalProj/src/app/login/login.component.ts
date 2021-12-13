import { Route } from '@angular/compiler/src/core';
import { createNgModuleType } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, OnInit, Output, EventEmitter, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../Customer Service/customer.service';
import { MyDetailsComponent } from '../CustomerFile/my-details/my-details.component';
import { EmployeeService } from '../EmployeeServices/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: any;
  accountNumber: any;

  constructor(private router: Router, private employeeService: EmployeeService, private customerService: CustomerService) {
  }

  loginHandler(credentails: any) {
    console.log("inside login component usename " + credentails.accountnumber)
    console.log("inside login component password " + credentails.password)



    if (credentails.accountnumber == "Admin" && credentails.password == "admin") {
      console.log("before session" + credentails)
      sessionStorage.setItem('loginId', credentails.accountNumber)
      console.log("before route")
      this.router.navigate(['employee'])

    } else {
      console.log("inside else of login" + credentails.accountnumber)
      sessionStorage.setItem('loginId', credentails.accountnumber)
      this.accountNumber = sessionStorage.getItem('loginId')
      this.custAccStatus(this.accountNumber, credentails)


    }

  }

  custAccStatus(accountNumber: any, credentails: any) {

    console.log("inside custAccStatus in  login accountnumber " + credentails.accountnumber)

    this.customerService.checkAccountStatus(credentails.accountnumber)
      .subscribe(data => {
        console.log("checking account status in login")
        // if (credentails.accountnumber == this.accountNumber && credentails.password == "password") {
        if (data) {
          this.router.navigate(['customer/details'])
        }
        else {
          alert('Account dose not exist / Inactive ')
        }//actual one
      })

  }


  ngOnInit(): void {
  }

}

