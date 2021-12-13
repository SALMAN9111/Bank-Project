import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';
import { EmployeeService } from 'src/app/EmployeeServices/employee.service';

@Component({
  selector: 'app-active-inactive',
  templateUrl: './active-inactive.component.html',
  styleUrls: ['./active-inactive.component.css']
})
export class ActiveInactiveComponent implements OnInit {

  accountNumber:any;

  constructor(private employeeService:EmployeeService,private router:Router,private route:ActivatedRoute) { 

  }


  changeAccStatusHandler(formData:any)
  {
    this.accountNumber = this.route.snapshot.paramMap.get('accountNumber')
    // this.accountNumber=sessionStorage.getItem('loginId')
    console.log("inside changeAccStatusHandler accountid "+this.accountNumber)
    console.log("inside changeAccStatusHandler status "+formData.status)
      this.employeeService.changeAccountStatus(this.accountNumber,formData.status)
      .subscribe((data: any) => {
        alert("Status changed Succesfully")
        this.router.navigate(['employee/viewAllCustomers'])
      })
  }


  ngOnInit(): void {
  }

}
