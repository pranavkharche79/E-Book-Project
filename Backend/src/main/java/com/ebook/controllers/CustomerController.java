package com.ebook.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ebook.entites.Customer;
import com.ebook.services.CustomerService;
import com.ebook.supports.CustomerProfileDTO;

@CrossOrigin
@RestController
@RequestMapping("api/customer")
public class CustomerController {
	
	@Autowired
	private CustomerService cService;
	
	@GetMapping("{id}")
	public ResponseEntity<?> getcustomerprofile(@PathVariable Long id){
		Customer cust=cService.getCustomerbyid(id);
		System.out.println("Customer= "+cust);
		return ResponseEntity.ok(cust);
	}
	
}