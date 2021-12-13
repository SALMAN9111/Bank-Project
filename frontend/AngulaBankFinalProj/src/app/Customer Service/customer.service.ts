import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { IChangepassword } from '../Interfaces/IChangepassword';
import { IPayee } from '../Interfaces/IPayee';

@Injectable({
  providedIn: 'root'

})
export class CustomerService {



  url = "http://localhost:8111/customer"

  constructor(private http: HttpClient) { }
 userAccno : any;

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  checkAuthentication(credentails: any): Observable<any> {
    console.log("Inside service" + credentails.accountnumber)
    console.log(typeof (credentails))
    return this.http.get(this.url + "/check", credentails);
  }

  myDetails(id: any): Observable<any> {
    console.log("Inside service of customer")
    return this.http.get(this.url +"/"+id+"/details")
  }

  addPayee(customerId: number, payee: IPayee[]) :Observable<any>  {
    console.log("inside payee service "+customerId)
    console.log("servcie acc num "+payee[0].accountNumber)
    return this.http.post(this.url +"/"+ customerId+ "/addPayee", payee, { responseType: 'text' })
  }

  editCustomer(customerId: number, customerData: any) {
    console.log("inside edit data")
    console.log("id-" + customerId)
    console.log("name-" + customerData.name)

    return this.http.put(this.url +"/"+customerId+"/editCustomer/" , customerData, { responseType: 'text' })
  }
  getCustomerById(customerId:number):Observable<any>{
    console.log(customerId);
    console.log("Inside getCustomerDetails of CustomerService")
    return this.http.get(this.url +"/"+customerId+ "/details")
  }

  getPayees(accNo : any) : Observable<IPayee[]>{
    this.userAccno = accNo;
    console.log("Inside service to get payees "+accNo )
    return this.http.get<any>(this.url+"/"+accNo);
  }

  getPayeeById(accNo : any):Observable<IPayee | undefined>{
    return this.getPayees(this.userAccno).pipe(
      map((payee: IPayee[]) => payee.find(p => p.accountNumber == accNo))
    );
  }

  transferMoney(senderAccNo:any,receiverAccNo:any,amount:any){
    return this.http.put(this.url+"/"+senderAccNo+"/transfermoney"+"/"+receiverAccNo,amount);
  }

  checkAccountStatus(accountNumber:any) : Observable<any>{
    console.log("inside checkAccountStatus accnumber "+accountNumber)
    return this.http.get(this.url+"/"+accountNumber+"/checkAccountStatus");
  }


  changePassword(accountNumber:any,Ichangepassword:IChangepassword) :Observable<any>
  {
    console.log("Inside change password service")

    return this.http.put(this.url+"/"+accountNumber+"/changePassword",Ichangepassword,{ responseType: 'text' })
  }

}