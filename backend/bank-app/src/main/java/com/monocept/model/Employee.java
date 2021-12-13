package com.monocept.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Employee {

	@Id
	private int empId;
	private String empName;
	private String empEmail;
	private String empAddress;
	private int empPhoneNo;
	private String empPassword;

	public Employee() {
	}

	public Employee(int empId, String empName, String empEmail, String empAddress, int empPhoneNo, String empPassword) {
		super();
		this.empId = empId;
		this.empName = empName;
		this.empEmail = empEmail;
		this.empAddress = empAddress;
		this.empPhoneNo = empPhoneNo;
		this.empPassword = empPassword;
	}

	public String getEmpPassword() {
		return empPassword;
	}

	public void setEmpPassword(String empPassword) {
		this.empPassword = empPassword;
	}

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public String getEmpEmail() {
		return empEmail;
	}

	public void setEmpEmail(String empEmail) {
		this.empEmail = empEmail;
	}

	public String getEmpAddress() {
		return empAddress;
	}

	public void setEmpAddress(String empAddress) {
		this.empAddress = empAddress;
	}

	public int getEmpPhoneNo() {
		return empPhoneNo;
	}

	public void setEmpPhoneNo(int empPhoneNo) {
		this.empPhoneNo = empPhoneNo;
	}

}
