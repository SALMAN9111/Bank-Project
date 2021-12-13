import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/Customer Service/customer.service';
import { IChangepassword } from 'src/app/Interfaces/IChangepassword';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  param: any;
  Ichangepassword:IChangepassword;

  constructor(private route: ActivatedRoute, private custoerService: CustomerService,private router:Router) {

    this.param = this.route.snapshot.paramMap.get('accountNumber')
    this.Ichangepassword={
      
    oldpassword:'',
    newpassword:''
    }
  }



  changePasswordHandler(formData: any) {
    console.log("inside change password handler")
    console.log("old pass "+formData.oldpassword)
    console.log("new pass "+formData.newpassword)
    this.Ichangepassword=formData;

    this.custoerService.changePassword(this.param,this.Ichangepassword)
        .subscribe(data=>{
          
          console.log("inside passwordchange")
          this.router.navigate(['customer/details'])
        })
  }

  ngOnInit(): void {

  }

}
