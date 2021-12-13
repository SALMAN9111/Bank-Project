import { Routes } from "@angular/router";
import { AddCustomerComponent } from "./EmployeeFile/add-customer/add-customer.component";
import { LoginComponent } from "./login/login.component";




import { RouteGuard } from "./route.guard";
import { TransactionComponent } from "./EmployeeFile/transaction/transaction.component";
import { EmployeeComponent } from "./EmployeeFile/employee/employee.component";
import { EmployeetasksComponent } from "./EmployeeFile/employeetasks/employeetasks.component";
import { MyDetailsComponent } from "./CustomerFile/my-details/my-details.component";
import { CustomerTaskComponent } from "./CustomerFile/customer-task/customer-task.component";
import { AddpayeeComponent } from "./CustomerFile/addpayee/addpayee.component";
import { EditcustomerComponent } from "./CustomerFile/editcustomer/editcustomer.component";
import { TranferfundComponent } from "./CustomerFile/tranferfund/tranferfund.component";
import { SendmoneyComponent } from "./CustomerFile/sendmoney/sendmoney.component";
import { ActiveInactiveComponent } from "./EmployeeFile/active-inactive/active-inactive.component";
import { ChangepasswordComponent } from "./CustomerFile/changepassword/changepassword.component";

export const RouteArray: Routes = [

    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'employee',
        component: EmployeetasksComponent,
        children: [
            {
                path: 'viewAllCustomers',
                component: EmployeeComponent,
                canActivate: [RouteGuard]
            },

            {
                path: 'addCustomer',
                component: AddCustomerComponent,
                canActivate: [RouteGuard]

            },

            {
                path: ':accountNumber',
                component: TransactionComponent,
                canActivate: [RouteGuard]

            },
            {
                path: ':accountNumber/changeStatus',
                component: ActiveInactiveComponent,
                canActivate: [RouteGuard]

            },
            {
                path: '',
                redirectTo: 'viewAllCustomers',
                pathMatch: 'full'

            }
        ]
    },

    {
        path: 'customer',
        component: CustomerTaskComponent,
        children: [
            {
                path: 'details',
                component: MyDetailsComponent,
                canActivate: [RouteGuard]
            },
            {
                path: 'addPayee',
                component: AddpayeeComponent,
                canActivate: [RouteGuard]

            },
            {
                path: ':accountNumber/edit',
                component: EditcustomerComponent,
                canActivate: [RouteGuard]
            },
            {
                path: ':accountNumber/changepassword',
                component: ChangepasswordComponent,
                canActivate: [RouteGuard]
            },
            {
                path: 'payees',
                component: TranferfundComponent,
                canActivate: [RouteGuard]
            },
            {
                path: 'payee/:payeeAccNo/sendmoney',
                component: SendmoneyComponent,
                canActivate: [RouteGuard]
            }
        ]
    },


    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }


]