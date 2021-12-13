import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/Customer Service/customer.service';
import { IPayee } from 'src/app/Interfaces/IPayee';

@Component({
  selector: 'app-sendmoney',
  templateUrl: './sendmoney.component.html',
  styleUrls: ['./sendmoney.component.css']
})
export class SendmoneyComponent implements OnInit {
param: any;
payee:IPayee;
accountNumber:any;
  constructor(private route:ActivatedRoute,private customerService: CustomerService,private router: Router) {
    this.payee={}
   }

   sendMoneyHandler(data: any) {
    console.log("amount to transfer "+data.amount);
    this.payee.accountNumber = data.accountNumber;
    this.payee.payeeName = data.name;
    console.log("payee accno"+ this.payee.accountNumber);
    console.log("payee name "+this.payee.payeeName);
    this.accountNumber = sessionStorage.getItem('loginId')
    this.customerService.transferMoney(this.accountNumber, this.payee.accountNumber,data.amount)
      .subscribe((data: any) => {
        // console.log(data.custPassword)
        alert("Money Transfered successfully")
        this.router.navigate(['customer/details'])
      })
  }

  ngOnInit(): void {
    console.log("Inside ng init");
    this.param = this.route.snapshot.paramMap.get('payeeAccNo')
    console.log("Param value " + this.param);
    this.customerService.getPayeeById(this.param)
      .subscribe((data: any) => {
        this.payee = data;
        console.log(this.payee)
      })
  }
  

}
