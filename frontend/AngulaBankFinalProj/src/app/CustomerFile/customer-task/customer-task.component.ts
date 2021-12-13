import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-task',
  templateUrl: './customer-task.component.html',
  styleUrls: ['./customer-task.component.css']
})
export class CustomerTaskComponent implements OnInit {

  constructor(private router:Router) { }

  logoutHandler() {
    console.log("Logout is firing");
    sessionStorage.removeItem('loginId');
    this.router.navigate(['login'])
  }

  ngOnInit(): void {
  }

}
