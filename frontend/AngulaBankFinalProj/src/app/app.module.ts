import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouteArray } from './route.config';
import { RouteGuard } from './route.guard';
import { LoginComponent } from './login/login.component';

import { TransactionComponent } from './EmployeeFile/transaction/transaction.component';
import { AddCustomerComponent } from './EmployeeFile/add-customer/add-customer.component';
import { EmployeeComponent } from './EmployeeFile/employee/employee.component';
import { EmployeetasksComponent } from './EmployeeFile/employeetasks/employeetasks.component';
import { EmpChangePasswordComponent } from './EmployeeFile/emp-change-password/emp-change-password.component';
import { EmployeeEditComponent } from './EmployeeFile/employee-edit/employee-edit.component';
import { MyDetailsComponent } from './CustomerFile/my-details/my-details.component';
import { CustomerTaskComponent } from './CustomerFile/customer-task/customer-task.component';
import { AddpayeeComponent } from './CustomerFile/addpayee/addpayee.component';
import { EditcustomerComponent } from './CustomerFile/editcustomer/editcustomer.component';
import { TranferfundComponent } from './CustomerFile/tranferfund/tranferfund.component';
import { SendmoneyComponent } from './CustomerFile/sendmoney/sendmoney.component';
import { ActiveInactiveComponent } from './EmployeeFile/active-inactive/active-inactive.component';
import { ChangepasswordComponent } from './CustomerFile/changepassword/changepassword.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    AddCustomerComponent,
    EmployeeComponent,
    EmployeetasksComponent,
    TransactionComponent,
    EmpChangePasswordComponent,
    AddCustomerComponent,
    EmployeeEditComponent,
    CustomerTaskComponent,
    MyDetailsComponent,
    AddpayeeComponent,
    EditcustomerComponent,
    TranferfundComponent,
    SendmoneyComponent,
    ActiveInactiveComponent,
    ChangepasswordComponent

  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(RouteArray), HttpClientModule
  ],
  providers: [RouteGuard, EditcustomerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
