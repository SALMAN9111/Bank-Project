import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/EmployeeServices/employee.service';
import { ICustomer } from 'src/app/Interfaces/ICustomer';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  customers: ICustomer[];

  constructor(private empService: EmployeeService,private router:Router) {
    this.customers = [];
  }

  getCustomerHandler() {
    console.log("getcustomerhandler" )
    this.empService.getCustomers()
      .subscribe(data => {
        this.customers = data;
        console.log("getcustomerhandler" + data)
      })

  }

 

  ngOnInit(): void {

    this.getCustomerHandler();
  }

}
