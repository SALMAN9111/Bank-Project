import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Customer Service/customer.service';
import { IPayee } from 'src/app/Interfaces/IPayee';

@Component({
  selector: 'app-addpayee',
  templateUrl: './addpayee.component.html',
  styleUrls: ['./addpayee.component.css']
})
export class AddpayeeComponent implements OnInit {

  payee: IPayee;
  payees: IPayee[];
  accountNumber:any;

  constructor(private customerService: CustomerService, private router: Router) {
    this.payee = {},
      this.payees = []
  }

  addPayeeHandler(payeeData: any) {
    this.payee.accountNumber = payeeData.payeeAccNo;
    this.payee.payeeName = payeeData.payeeNamee;

    console.log("payename " + this.payee.payeeName)
    console.log("payee acc " + this.payee.accountNumber)
    this.payees.push(this.payee);

    this.accountNumber = sessionStorage.getItem('loginId')

    this.customerService.addPayee(this.accountNumber, this.payees)
      .subscribe((data: any) => {
        console.log(data)
        alert("Payeed added succesfully")
        this.router.navigate(['customer/details'])
      })
  }

  ngOnInit(): void {
  }

}