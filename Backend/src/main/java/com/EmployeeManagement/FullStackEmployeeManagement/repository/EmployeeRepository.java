package com.EmployeeManagement.FullStackEmployeeManagement.repository;

import com.EmployeeManagement.FullStackEmployeeManagement.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {
    //ALl CRUD database methods
}
