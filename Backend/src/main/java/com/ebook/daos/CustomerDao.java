package com.ebook.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ebook.entites.Customer;

@Repository
public interface CustomerDao extends JpaRepository<Customer, Long>{
	
	@Query(value = "INSERT INTO customers (email, name) VALUES (?, ?)",nativeQuery = true)
	int createCustomer(String email, String name);

	@Query(value = "Select * from customers where email=?",nativeQuery = true)
	Customer getbyemail(String email);
	
}
