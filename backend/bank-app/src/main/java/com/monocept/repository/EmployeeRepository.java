package com.monocept.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.monocept.model.Employee;
import com.monocept.model.EmployeeDTO;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Integer> {

	void save(EmployeeDTO employee);

}
