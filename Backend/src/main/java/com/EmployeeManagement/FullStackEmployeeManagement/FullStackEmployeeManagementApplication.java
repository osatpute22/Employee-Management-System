package com.EmployeeManagement.FullStackEmployeeManagement;

import com.EmployeeManagement.FullStackEmployeeManagement.model.Employee;
import com.EmployeeManagement.FullStackEmployeeManagement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FullStackEmployeeManagementApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(FullStackEmployeeManagementApplication.class, args);
	}
	@Autowired
	private EmployeeRepository employeeRepository;
	@Override
	public void run(String... args) throws Exception{
//		Employee employee=new Employee();
//		employee.setFirstName("Ram");
//		employee.setLastName("Hari");
//		employee.setEmailId("ramhari22@gmail.com");
//		employeeRepository.save(employee);
//
//		Employee employee1=new Employee();
//		employee1.setFirstName("sham");
//		employee1.setLastName("lokhande");
//		employee1.setEmailId("shamlokhande72@gmail.com");
//		employeeRepository.save(employee1);
	}
}
