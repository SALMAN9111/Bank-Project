import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeetasks',
  templateUrl: './employeetasks.component.html',
  styleUrls: ['./employeetasks.component.css']
})
export class EmployeetasksComponent implements OnInit {

  constructor(private router:Router) { }
  
  logoutHandler() {
    console.log("Logout is firing");
    sessionStorage.removeItem('loginId');
    this.router.navigate(['login'])
  }
  
  ngOnInit(): void {
  }

}
