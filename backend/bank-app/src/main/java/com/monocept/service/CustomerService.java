package com.monocept.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.monocept.model.AccountStatusType;
import com.monocept.model.ChangePassword;
import com.monocept.model.Customer;
import com.monocept.model.CustomerDTO;
import com.monocept.model.Employee;
import com.monocept.model.Payee;
import com.monocept.model.Transaction;
import com.monocept.model.TransactionType;
import com.monocept.repository.CustomerRepository;
import com.monocept.repository.PayeeRepository;

@Service
public class CustomerService {

	@SuppressWarnings("unused")
	@Autowired
	private PayeeRepository payeeRepository;
	@Autowired
	private CustomerRepository customerRepository;

	Employee employee = new Employee();
	Customer customer;
	Payee payee;

	public boolean changePassword(int customerId, ChangePassword changepassword) {
		
		System.out.println("cust id - password service" + customerId);
		System.out.println("cust id -oldPassword " + changepassword.getOldpassword());
		System.out.println("cust id -newPassword " + changepassword.getNewpassword());
		customer = customerRepository.findById(customerId).get();
	
		if (customer.getCustPassword().equals(changepassword.getOldpassword())) {
			customer.setCustPassword(changepassword.getNewpassword());
			customerRepository.save(customer);
			return true;
		}
		return false;
	}

	public Customer getCustomerById(Integer accountnumber) {
		System.out.println("Inside get customer by id");
		return customerRepository.findById(accountnumber).get();

	}

	public List<Payee> getAllPayee(Integer accountNumber) {
		System.out.println("Inside get all payee");
		customer = customerRepository.findById(accountNumber).get();
		return customer.getPayees();
	}

	public Customer getMyDetails(int accNo) {
		System.out.println("Inside service of mydetails");
		customer = customerRepository.findById(accNo).get();
		System.out.println("Customer data" + customer);
		return customer;
	}

	public Customer addPayee(int customerId, List<Payee> payees) {

		System.out.println("Custmoer id " + customerId);
		customer = customerRepository.findById(customerId).get();
		System.out.println("payee name " + payees.get(0).getPayeeName());
		System.out.println("payee accNo " + payees.get(0).getAccountNumber());
		customer.setPayees(payees);
		customerRepository.save(customer);
		System.out.println("Payee Added" + customer);
		return customer;

	}

	public void editCustomerDetails(CustomerDTO pCustomer, int customerId) {

		customer = customerRepository.findById(customerId).get();
		System.out.println("Param email " + customer.getCustEmail());
		System.out.println("parma phone " + customer.getCustPhoneNo());
		customer.setCustEmail(pCustomer.getCustEmail());
		customer.setCustPhoneNo(pCustomer.getCustPhoneNodto());
		customer.setCustPassword(pCustomer.getCustPassword());
		customer.setCustOccupation(pCustomer.getCustOccupation());

		customerRepository.save(customer);
		System.out.println("save of edit customer");
	}

	public boolean transferMoney(int customerId, double amount, int payeeId) {
		System.out.println("inside service transfer");
		Customer moneySender;
		Customer moneyReciever;
		moneySender = customerRepository.findById(customerId).get();
		System.out.println("moneySender " + moneySender);
		moneyReciever = customerRepository.findById(payeeId).get();
		System.out.println("moneyReciever " + moneyReciever);
		System.out.println(amount);

		if (moneySender.getCustBalance() > amount) {
			System.out.println("Inside if" + moneySender.getCustBalance());
			moneyReciever.setCustBalance(moneyReciever.depositeMoney(amount));
			moneySender.setCustBalance(moneySender.withDrawMoney(amount));

			List<Transaction> t = new ArrayList<Transaction>();
			t.add(new Transaction(0, amount, TransactionType.WITHDRAW, new java.util.Date(), moneySender));
			moneySender.setTransactions(t);

			List<Transaction> t1 = new ArrayList<Transaction>();
			t1.add(new Transaction(0, amount, TransactionType.DEPOSIT, new java.util.Date(), moneyReciever));
			moneyReciever.setTransactions(t1);

			customerRepository.save(moneyReciever);
			System.out.println("save ");
			customerRepository.save(moneySender);

			return true;
		}

		return false;
	}

	public boolean checkAccountStatus(int accountNumber) {

		System.out.println("inside checkAccountStatus sevice ");

		customer = customerRepository.findById(accountNumber).get();

		if (customer.getAccountStatus().equals(AccountStatusType.ACTIVE)) {
			return true;
		}
		return false;
	}

}

//public Customer verifyCredential(Map<String, String> credentials) {
//
//		String accountNumber = credentials.get("accountnumber");
//		String password = credentials.get("password");
//
//		System.out.println("Inside srvice" + accountNumber);
//		System.out.println(password);
//
//		return null;
//	}
