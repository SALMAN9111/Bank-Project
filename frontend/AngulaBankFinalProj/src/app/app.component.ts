import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bank-app';

  constructor(private router : Router){}
  // logoutHandler() {
  //   console.log("Logout is firing");
  //   sessionStorage.removeItem('loginId');
  //   this.router.navigate(['login'])
  // }
}
