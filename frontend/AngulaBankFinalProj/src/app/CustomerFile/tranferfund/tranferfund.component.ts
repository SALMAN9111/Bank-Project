import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Customer Service/customer.service';
import { IPayee } from 'src/app/Interfaces/IPayee';
import { EditcustomerComponent } from '../editcustomer/editcustomer.component';

@Component({
  selector: 'app-tranferfund',
  templateUrl: './tranferfund.component.html',
  styleUrls: ['./tranferfund.component.css']
})
export class TranferfundComponent implements OnInit {
userAccNO : any;
payees : IPayee[];
balance:any;
accountNumber:any;
  constructor(private customerService:CustomerService,public accNO: EditcustomerComponent) {
    this.payees = [];

   }




  ngOnInit(): void {
    this.userAccNO = this.accNO.getAccountNumber;
    console.log(this.accNO.getAccountNumber);
    console.log("transfer funds inside "+this.userAccNO)
    this.accountNumber = sessionStorage.getItem('loginId')
    this.customerService.getPayees(this.accountNumber)
      .subscribe(data=>{
        this.payees = data 
        console.log("list of payees "+this.payees);
      })
  }

}
