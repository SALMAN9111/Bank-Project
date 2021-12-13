package com.monocept.model;

public class CustomerDTO {

	private String custEmail;
	private int custPhoneNodto;
	private String custOccupation;
	private String custPassword;

	public CustomerDTO() {
	}

	public CustomerDTO(String custEmail, int custPhoneNodto, String custOccupation, String custPassword) {
		super();
		this.custEmail = custEmail;
		this.custPhoneNodto = custPhoneNodto;
		this.custOccupation = custOccupation;
		this.custPassword = custPassword;
	}

	public String getCustEmail() {
		return custEmail;
	}

	public void setCustEmail(String custEmail) {
		this.custEmail = custEmail;
	}

	public String getCustOccupation() {
		return custOccupation;
	}

	public void setCustOccupation(String custOccupation) {
		this.custOccupation = custOccupation;
	}

	public String getCustPassword() {
		return custPassword;
	}

	public void setCustPassword(String custPassword) {
		this.custPassword = custPassword;
	}

	public int getCustPhoneNodto() {
		return custPhoneNodto;
	}

	public void setCustPhoneNodto(int custPhoneNodto) {
		this.custPhoneNodto = custPhoneNodto;
	}

	
	
}
