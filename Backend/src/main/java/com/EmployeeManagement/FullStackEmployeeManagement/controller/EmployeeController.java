package com.EmployeeManagement.FullStackEmployeeManagement.controller;

import com.EmployeeManagement.FullStackEmployeeManagement.exception.ResourceNotFoundException;
import com.EmployeeManagement.FullStackEmployeeManagement.model.Employee;
import com.EmployeeManagement.FullStackEmployeeManagement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/employee")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;
    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }
    //build  create rest api
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    //build get employee by id using rest api
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id){
        Employee employee=employeeRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("Employee not exist in Databse"+id));
        return ResponseEntity.ok(employee);
    }
    //build update employee using rest api
    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id,@RequestBody Employee employeeDetails){
        Employee updateEmployee=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee Not exist with Id "+id));
        updateEmployee.setFirstName(employeeDetails.getFirstName());
        updateEmployee.setLastName(employeeDetails.getLastName());
        updateEmployee.setEmailId(employeeDetails.getEmailId());
        employeeRepository.save(updateEmployee);
        return ResponseEntity.ok(updateEmployee);
    }
    //build delete employee rest api
    @DeleteMapping("{id}")
    public  ResponseEntity<Employee> deleteEmployee(@PathVariable long id){
         Employee employee=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee Not Exist "+id));
         employeeRepository.delete(employee);
         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

