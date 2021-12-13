package com.monocept.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Payee {
	@Id
	private long accountNumber;
	private String payeeName;

	@ManyToOne()
	@JsonIgnore
	@JoinColumn(name = "customerId")
	private Customer customer;

	public Payee() {

	}
	
	public Payee(long accountNumber, String payeeName, Customer customer) {
		super();
		this.accountNumber = accountNumber;
		this.payeeName = payeeName;
		this.customer = customer;
	}



	public long getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(long accountNumber) {
		this.accountNumber = accountNumber;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	@Override
	public String toString() {
		return accountNumber + " ";
	}

	public String getPayeeName() {
		return payeeName;
	}

	public void setPayeeName(String payeeName) {
		this.payeeName = payeeName;
	}

}
