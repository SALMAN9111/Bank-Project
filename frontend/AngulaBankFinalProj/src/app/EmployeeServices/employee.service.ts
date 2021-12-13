import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, filter, map, mapTo, tap } from 'rxjs/operators'
import { ITransacction } from '../Interfaces/ITransaction';
import { ICustomer } from '../Interfaces/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  itransaction: ITransacction;
  customer: string | undefined;

  url = "http://localhost:8111/employee"

  constructor(private http: HttpClient) {

    this.itransaction = {
      amount: 0,
      deposit: "",
      withdraw: ""
    }
  }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getCustomers(): Observable<ICustomer[]> {
    console.log("inside getcustomer service")
    return this.http.get<any>(this.url + "/viewAllCustomers")

  }

  depositByEmployee(accountNumber: number, amount1: Number) {
    console.log("deposit " + typeof (amount1))
    return this.http.put(this.url + "/" + accountNumber + "/deposit", amount1)

  }

  withdrawByEmployee(accountNumber: number, amount1: Number) {
    console.log("Inside withdaw by emp" + accountNumber)
    console.log("typeeee " + typeof (amount1))
    return this.http.put(this.url + "/" + accountNumber + "/widthdraw", amount1)
  }

  addCustomer(data: ICustomer): Observable<any> {
    console.log("inside add cust service" + data.custName)
    return this.http.post(this.url + "/addcustomer", data)
  }



  uploadImageToBackend(data: any) {
    console.log("inside upload image service")
    return this.http.post("http://localhost:8111/file/uploadImage", data, { responseType: 'text' })
  }

  changeAccountStatus(accountNumber: any, status: any): Observable<any> {

    console.log("status handler service");
    return this.http.put(this.url + "/" + accountNumber + "/changeStatus", status)
  }

 


}
