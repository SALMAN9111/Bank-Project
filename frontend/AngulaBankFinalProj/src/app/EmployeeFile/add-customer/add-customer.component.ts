import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/EmployeeServices/employee.service';
import { ICustomer } from 'src/app/Interfaces/ICustomer';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: ICustomer;
  fileName = '';
  file: File | undefined;
  // fileToUpload: File;

  constructor(private employeeService: EmployeeService, private router: Router) {
    this.customer = {
      accountNumber: 0,
      accountStatus: "",
      custAddress: "",
      custBalance: 0,
      custEmail: "",
      custName: "",
      custOccupation: "",
      custPassword: "",
      custPhoneNo: 0
    }
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    console.log("inside upload image ")
    console.log(this.file);
  }

  addCustomerHandler(data: any) {
    console.log("inside addCustomerHandler name" + data.name)
    this.customer.custName = data.name;
    this.customer.accountStatus = data.status;
    this.customer.custAddress = data.address;
    this.customer.custBalance = data.addamount;
    this.customer.custEmail = data.email;
    this.customer.custOccupation = data.occupation;
    this.customer.custPassword = data.password;
    this.customer.accountStatus = data.accountstatus;
    this.customer.custPhoneNo = data.custPhone;

    console.log("name inide add customerhandler" + this.customer.custPhoneNo)
    this.employeeService.addCustomer(this.customer)
      .subscribe(info => {
        console.log("====info"+info)
       
        this.uploadImage(this.file,info)
        // this.router.navigate(['employee/viewAllCustomers'])
      })
    // employee/viewAllCustomers
  }

  uploadImage(file: any,info:any) {
    if (file) {
      console.log("Inside upload image function")
      this.fileName = file.name;
      

      const formData = new FormData();
      formData.append("image", file);
      formData.append("Account Number",info);

      this.employeeService.uploadImageToBackend(formData)
        .subscribe(data => {
          console.log(data)
          this.router.navigate(['employee/viewAllCustomers'])
        });

      // this.fileName = file.name;
      // const formData = new FormData();
      // formData.append("thumbnail", file);
      // const upload$ = this.http.post("/api/thumbnail-upload", formData);
      // upload$.subscribe();

      // this.router.navigate(['employee/viewAllCustomers'])
    }
  }

  ngOnInit(): void {
  }

}
