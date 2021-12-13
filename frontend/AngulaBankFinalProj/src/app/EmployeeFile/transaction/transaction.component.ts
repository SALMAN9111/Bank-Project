import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/EmployeeServices/employee.service';
import { ITransacction } from '../../Interfaces/ITransaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  param: any
  transactionType: ITransacction
  amount: Number;

  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) {

    this.amount = 0;
    this.transactionType = {
      amount: 0,
      deposit: "",
      withdraw: ""
    }
  }

  depositHandler(params: any, wamount: number) {
    console.log("Inside deposit handler handler");
    this.amount = this.transactionType.amount;
    this.employeeService.depositByEmployee(params, wamount)
      .subscribe(data => {
        console.log(data)
        this.router.navigate(['employee/viewAllCustomers'])
      })
  }
  withdrawHandler(params: any, wamount: number) {
    console.log("Inside withdraw handler");
    this.amount = this.transactionType.amount;
    this.employeeService.withdrawByEmployee(params, wamount)
      .subscribe(data => {
        console.log(data)
        this.router.navigate(['employee/viewAllCustomers'])
      })
  }

  transactionHandler(transaction: any) {
    console.log("transaction amount" + transaction.amount)
    this.transactionType = transaction;
    this.param = this.route.snapshot.paramMap.get('accountNumber')
    console.log("transaction type: "+transaction.tarnsac);

    if (transaction.tarnsac == "deposit") {
      console.log("inside deposit")
      this.depositHandler(this.param, transaction.amount)
    }
    else {
      console.log("inide else")
      this.withdrawHandler(this.param, transaction.amount);
    }

  }

  ngOnInit() {


  }

}
