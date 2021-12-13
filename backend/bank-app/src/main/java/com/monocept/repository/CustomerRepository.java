package com.monocept.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.monocept.model.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer,Integer>{
	
}
