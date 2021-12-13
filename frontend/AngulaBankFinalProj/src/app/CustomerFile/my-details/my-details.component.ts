import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/Customer Service/customer.service';
import { ICustomer } from 'src/app/Interfaces/ICustomer';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {
  myDetails: ICustomer;
  param: any;
  num: any;
  @Input()
  id: number;

  accountNumber:any;

  constructor(private customerService: CustomerService, private route: ActivatedRoute) {
    
    this.myDetails = {
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
    this.num = 1052806883;
    this.id = 0;

    this.accountNumber = sessionStorage.getItem('loginId')
  }
  //  1049240525

  myDetaislHandler(Pid: any) {
    console.log("accno2 "+Pid);
    this.customerService.myDetails( this.accountNumber)
      .subscribe(data => {
     
        this.myDetails = data;
      })
  }


  ngOnInit(): void {
    this.param = this.route.snapshot.paramMap.get('accountNumber')
    console.log("inside oninit of details "+this.id);
    this.myDetaislHandler(this.id);
  }

}
