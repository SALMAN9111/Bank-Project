package com.monocept.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Customer {
	@Id
	private int accountNumber;
	private String custName;
	private String custEmail;
	private String custAddress;
	private int custPhoneNo;
	private String custOccupation;
	private double custBalance;
	private String custPassword;
	@Enumerated(EnumType.STRING)
	private AccountStatusType accountStatus;

	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
	private List<Payee> payees;

	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
	private List<Transaction> transactions;

	public Customer() {

		payees = new ArrayList<Payee>();
	}

	public Customer(int accountNumber, String custName, String custEmail, String custAddress, int custPhoneNo,
			String custOccupation, double custBalance, String custPassword, AccountStatusType accountStatus) {
		this.accountNumber = accountNumber;
		this.custName = custName;
		this.custEmail = custEmail;
		this.custAddress = custAddress;
		this.custPhoneNo = custPhoneNo;
		this.custOccupation = custOccupation;
		this.custBalance = custBalance;
		this.custPassword = custPassword;
		this.accountStatus = accountStatus;
	}

	
	
	
	
	public int getCustPhoneNo() {
		return custPhoneNo;
	}

	public void setCustPhoneNo(int custPhoneNo) {
		this.custPhoneNo = custPhoneNo;
	}

	public AccountStatusType getAccountStatus() {
		return accountStatus;
	}

	public void setAccountStatus(AccountStatusType accountStatus) {
		this.accountStatus = accountStatus;
	}

	public double getCustBalance() {
		return custBalance;
	}

	public void setCustBalance(double custBalance) {
		this.custBalance = custBalance;
	}

	public int getAccountNumber() {
		return accountNumber;
	}

	public void eSetAccountNumber(int accountNumber) {
		this.accountNumber = accountNumber;
	}

	public void setAccountNumber(int accountNumber) {
		this.accountNumber = generateCustomerAccountNumber();
	}

	public String getCustPassword() {
		return custPassword;
	}

	public void setCustPassword(String password) {
		this.custPassword = password;
	}

	public List<Payee> getPayees() {
		return payees;
	}

	public void setPayees(List<Payee> payees) {
		this.payees = payees;
		for (Payee p : payees) {
			p.setCustomer(this);
		}
	}

	public List<Transaction> getTransactions() {
		return transactions;
	}

	public void setTransactions(List<Transaction> transactions) {

		this.transactions = transactions;
		for (Transaction t : transactions) {
			t.setCustomer(this);
		}
	}

	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	public String getCustEmail() {
		return custEmail;
	}

	public void setCustEmail(String custEmail) {
		this.custEmail = custEmail;
	}

	public String getCustAddress() {
		return custAddress;
	}

	public void setCustAddress(String custAddress) {
		this.custAddress = custAddress;
	}



	public String getCustOccupation() {
		return custOccupation;
	}

	public void setCustOccupation(String custOccupation) {
		this.custOccupation = custOccupation;
	}

	public double withDrawMoney(double amount) {
		if ((this.custBalance - amount) > 500) {
			return (this.custBalance - amount);
		}
		
		return this.custBalance;
	}

	public double depositeMoney(double amount) {
		return this.custBalance = this.custBalance + amount;
	}

	public int generateCustomerAccountNumber() {
		int customerAccountNumber = (int) Math.floor(Math.random() * 90000000) + 1000000000;
		return customerAccountNumber;
	}

	@Override
	public String toString() {
		return accountNumber + custName + custEmail + custAddress + custPhoneNo + custOccupation + payees
				+ accountStatus;
	}

}
