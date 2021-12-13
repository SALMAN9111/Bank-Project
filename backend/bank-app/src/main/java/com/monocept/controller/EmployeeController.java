package com.monocept.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.monocept.model.Customer;
import com.monocept.model.Employee;
import com.monocept.service.EmployeeService;

@RestController
@CrossOrigin
@RequestMapping("/employee")
public class EmployeeController {

	@Autowired
	public EmployeeService empService;
	Customer customer;

	@PostMapping(value = "/addcustomer", consumes = "application/json")
	public void addCustomer(@RequestBody Customer customer) {
		System.out.println("Inside controller");
		System.out.println("phone " + customer.getCustPhoneNo());

		empService.addCustomer(customer);
		// return ResponseEntity.ok(empService.addCustomer(customer));

	}

	@GetMapping(value = "/viewAllCustomers")
	public List<Customer> viewAllCustomers() {
		System.out.println("Inside view allcustomer");
		List<Customer> customers = empService.viewAllCustomer();

		return customers;

	}

	@GetMapping(value = "/viewCustomer/{customerId}")
	public ResponseEntity<Customer> viewCUstomerById(@PathVariable Integer customerId) {
		Customer optionalCustomer = empService.getCustomerById(customerId);

		return ResponseEntity.ok(optionalCustomer);
	}

	@PutMapping(value = "/{employeeid}/editEmployee", consumes = "application/json")
	public ResponseEntity<String> updateEmployeeDetails(@RequestBody Employee employee) {
		Employee editdetails = empService.editEmployeeDetails(employee);
		System.out.println("Inside edit controller");
		if (editdetails.equals("")) {
			System.out.println("Inside edit controller if");
			return ResponseEntity.unprocessableEntity().build();
		}

		return ResponseEntity.ok(editdetails.getEmpEmail() + editdetails.getEmpPhoneNo());
	}

	// withdraw

	@PutMapping(value = "/{customerId}/widthdraw")
	public void withdrawMoney(@PathVariable Integer customerId, @RequestBody Double amount1) {
		System.out.println("Customer id -> " + customerId);
		System.out.println("amount check-> " + amount1);
		System.out.println("Inside withdraw controller");
		customer = empService.getCustomerById(customerId);
		System.out.println("balance--> " + customer.getCustBalance());

		if (customer.getCustBalance() != 0 && customer.getCustBalance() > amount1) {
			empService.withDrawMoney(customer, amount1);
		}
	}

	// deposit

	@PutMapping(value = "/{customerId}/deposit")
	public void deposit(@PathVariable Integer customerId, @RequestBody Double amount) {
		System.out.println("Inside deposit controller");
		customer = empService.getCustomerById(customerId);
		System.out.println("balance--> " + customer.getCustBalance());

		empService.depositeMoney(customer, amount);

	}

	@PutMapping(value = "/{employeeId}/changePassword")
	public boolean changePassword(@PathVariable Integer employeeId, String oldPassword, String newPassword) {
		boolean changPassword = empService.changePassword(employeeId, oldPassword, newPassword);
		System.out.println("Inside edit controller");
		if (changPassword) {
			System.out.println("Inside edit controller if");

			return true;
		}
		return false;

	}

//	changeAccountStatus

	@PutMapping(value = "/{customerId}/changeStatus")
	public void changingStatus(@PathVariable Integer customerId, @RequestBody String status) {
		System.out.println("inside change status conroller" + customerId + "-- status-" + status);
		empService.changeAccountStatus(customerId, status);
	}

	@GetMapping(value = "/{userId}/UserLogin")
	public String userLogin(@PathVariable Integer userId,  String password) {
		System.out.println("Inside login controller");

		String user = empService.userLoginCheck(userId, password);
		System.out.println("user " + user);
		return user;

	}

}