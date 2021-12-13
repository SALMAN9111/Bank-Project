import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  
  constructor(private router:Router){
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      console.log("Inside canActivate of appguard");
      const isUser = sessionStorage.getItem('loginId')
      console.log(sessionStorage.getItem('loginId'));
      if (isUser != null) {
        console.log("Inisde if of canActivate of appguard ")
        return true;
      }
      else {
        console.log("Inisde else of canActivate of appguard ")
        this.router.navigate(['login'])
        return false
      }
    }

  }

  
  

