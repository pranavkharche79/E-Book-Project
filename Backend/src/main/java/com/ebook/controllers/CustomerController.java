package com.ebook.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ebook.services.CustomerService;

@CrossOrigin
@RestController
@RequestMapping("api/customer")
public class CustomerController {
	
	@Autowired
	private CustomerService cService;
	
	@GetMapping("{id}")
	public ResponseEntity<?> getcustomerprofile(@PathVariable int id){
		
		return null;
	}
	
}
