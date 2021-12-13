package com.monocept.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.monocept.model.Payee;

@Repository
public interface PayeeRepository extends CrudRepository<Payee, Integer> {

}
