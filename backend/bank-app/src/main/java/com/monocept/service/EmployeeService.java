package com.monocept.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.monocept.model.AccountStatusType;
import com.monocept.model.Customer;
import com.monocept.model.Employee;
import com.monocept.model.Transaction;
import com.monocept.model.TransactionType;
import com.monocept.repository.CustomerRepository;
import com.monocept.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private EmailService emailService;

	Employee employee = new Employee();
	Customer customer;

	public Customer getCustomerById(Integer accountnumber) {
		System.out.println("Inside get customer by id");
		return customerRepository.findById(accountnumber).get();

	}

	public List<Customer> viewAllCustomer() {
		List<Customer> dtoList = new ArrayList<Customer>();
		dtoList = (List<Customer>) customerRepository.findAll();

		return dtoList;
	}

//	public AccountStatusType setStatus(String setStatus) {
//
//		if (setStatus.equals("ACTIVE")) {
//			return AccountStatusType.ACTIVE;
//		}
//		if (setStatus.equals("INACTIVE")) {
//			return AccountStatusType.INACTIVE;
//		}
//
//		return AccountStatusType.BLOCKED;
//	}

	public void changeAccountStatus(int accointId, String status) {
		customer = customerRepository.findById(accointId).get();
		System.out.println("inside change status service" + accointId + "-- status-" + status);
		if (status.equals("ACTIVE")) {
			System.out.println("inside active");
			customer.setAccountStatus(AccountStatusType.ACTIVE);
		} else if (status.equals("INACTIVE")) {
			System.out.println("inside inactive ");
			customer.setAccountStatus(AccountStatusType.INACTIVE);
		}

		customerRepository.save(customer);

	}

	public Customer withDrawMoney(Customer cus, double amount) {
		cus.setCustBalance(cus.withDrawMoney(amount));
		List<Transaction> t = new ArrayList<Transaction>();
		t.add(new Transaction(0, amount, TransactionType.WITHDRAW, new Date(), cus));
		cus.setTransactions(t);
		customerRepository.save(cus);
		return cus;
	}

	public Customer depositeMoney(Customer cus, double amount) {
		System.out.println("inside deposit");
		cus.setCustBalance(cus.depositeMoney(amount));
		List<Transaction> t = new ArrayList<Transaction>();
		t.add(new Transaction(0, amount, TransactionType.DEPOSIT, new Date(), cus));
		cus.setTransactions(t);
		customerRepository.save(cus);
		return cus;
	}

	public Employee editEmployeeDetails(Employee pEmployee) {
		employee.setEmpId(pEmployee.getEmpId());
		employee.setEmpAddress(pEmployee.getEmpAddress());
		employee.setEmpEmail(pEmployee.getEmpEmail());
		employee.setEmpPhoneNo(pEmployee.getEmpPhoneNo());
		employee.setEmpName(pEmployee.getEmpName());
		employee.setEmpPassword(pEmployee.getEmpPassword());
		employeeRepository.save(employee);

		return employee;
	}

	public void addCustomer(Customer pCustomer) {
		System.out.println("add customer service");

		pCustomer.setAccountNumber(pCustomer.getAccountNumber());
		pCustomer.setCustAddress(pCustomer.getCustAddress());
		pCustomer.setCustBalance(pCustomer.getCustBalance());
		pCustomer.setCustEmail(pCustomer.getCustEmail());
		pCustomer.setCustName(pCustomer.getCustName());
		pCustomer.setCustOccupation(pCustomer.getCustOccupation());
		pCustomer.setCustPhoneNo(pCustomer.getCustPhoneNo());
		pCustomer.setCustPassword(pCustomer.getCustPassword());
		pCustomer.setPayees(pCustomer.getPayees());
		pCustomer.setAccountStatus(pCustomer.getAccountStatus());
		System.out.println("Inside service" + pCustomer);
		customerRepository.save(pCustomer);

		emailService.sendMail(pCustomer.getCustEmail(), pCustomer.getAccountNumber(), pCustomer.getCustPassword());

		// return pCustomer;
	}

	public boolean changePassword(int employeeId, String oldPassword, String newPassword) {

		employee = employeeRepository.findById(employeeId).get();

		if (employee.getEmpPassword().equals(oldPassword)) {
			employee.setEmpPassword(newPassword);
			employeeRepository.save(employee);
			return true;
		}

		return false;
	}

	public String userLoginCheck(int userID, String password) {

		System.out.println("inside login check controler");

		try {
			employee = employeeRepository.findById(userID).get();

			System.out.println("id " + userID);
			System.out.println("passw " + password);

			if (employee.getEmpPassword().equals(password)) {

				System.out.println("inside emp");
				return "employee";

			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		try {
			customer = customerRepository.findById(userID).get();

			if (customer.getCustPassword().equals(password))

				return "customer";

		} catch (Exception e) {
			e.printStackTrace();
		}

		return "null";
	}
}
