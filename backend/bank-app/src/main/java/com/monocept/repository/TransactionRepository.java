package com.monocept.repository;

import org.springframework.data.repository.CrudRepository;

import com.monocept.model.Customer;

public interface TransactionRepository extends CrudRepository<Customer,Integer>{

}
