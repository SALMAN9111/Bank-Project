package com.monocept.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.monocept.model.EmployeeDTO;
import com.monocept.repository.CustomerRepository;
import com.monocept.repository.EmployeeRepository;

@Service
public class BankService {

	EmployeeDTO employee = new EmployeeDTO();

	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private CustomerRepository customerRepository;


	public char[] generateRandomPassWord() {
		System.out.println("Inside Forgot Password");
		int len = 8;
		String capitalChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		String smallChars = "abcdefghijklmnopqrstuvwxyz";

		String numbers = "0123456789";
		String sysmbols = "!@#$%^&*()";

		String values = capitalChars + smallChars + numbers + sysmbols;

		Random ranMethod = new Random();

		char[] password = new char[len];

		for (int i = 0; i < len; i++) {
			password[i] = values.charAt(ranMethod.nextInt(values.length()));
		}

		return password;
	}
}
