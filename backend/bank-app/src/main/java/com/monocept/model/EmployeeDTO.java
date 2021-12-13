package com.monocept.model;

public class EmployeeDTO {
	private String empEmail;
	private String empAddress;
	private int empPhoneNo;
	private int empPassword;

	public EmployeeDTO() {

	}

	public EmployeeDTO(String empEmail, String empAddress, int empPhoneNo, int empPassword) {
		this.empEmail = empEmail;
		this.empAddress = empAddress;
		this.empPhoneNo = empPhoneNo;
		this.empPassword = empPassword;
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

	public int getEmpPassword() {
		return empPassword;
	}

	public void setEmpPassword(int empPassword) {
		this.empPassword = empPassword;
	}

}
