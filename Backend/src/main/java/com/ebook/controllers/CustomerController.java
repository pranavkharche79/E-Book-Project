package com.ebook.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.ebook.entites.Address;
import com.ebook.entites.Customer;
import com.ebook.services.AddressService;
import com.ebook.services.CustomerService;

@CrossOrigin
@RestController
@RequestMapping("api/customer")
public class CustomerController {
	
	@Autowired
	private CustomerService cService;
	@Autowired
	private AddressService aService;
	
	@GetMapping("{id}")
	public ResponseEntity<?> getcustomerprofile(@PathVariable Long id){
		Customer cust=cService.getCustomerbyid(id);
		if(cust==null) {
			return  ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		Address address=aService.getbycustid(id);
		Map<String, Object> responseData = new HashMap<>();
	    responseData.put("customer", cust);
	    responseData.put("address", address);
	    
	    return ResponseEntity.ok(responseData);
	}
	
	@PutMapping
	public ResponseEntity<?> updatecustomer(@RequestBody Customer cust){
		System.out.println("Customer= "+cust);
		cService.updatecustomer(cust);
		return ResponseEntity.ok("Personal Details Saved Successfully");
	}
	
	@PutMapping("/address")
	public ResponseEntity<?> updateAddress(@RequestBody Address addr,@RequestParam("customerId")long id){
		System.out.println("Address= "+addr+"\ncustomerid= "+id);
		Customer customer=cService.getCustomerbyid(id);
		if (customer == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Customer not found");
        }
		Address existingaddress=aService.getbycustid(id);
		if(existingaddress!=null) {
			existingaddress.setAdrr(addr.getAdrr());
			existingaddress.setCity(addr.getCity());
			existingaddress.setLandmark(addr.getLandmark());
			existingaddress.setPincode(addr.getPincode());
			existingaddress.setState(addr.getState());
			aService.updateAddress(existingaddress);
			return ResponseEntity.ok("Address Saved Successfully");
		}
		addr.setCust(customer);
		aService.savAddress(addr);
		return ResponseEntity.ok("Address Saved Successfully");
	}
	
	@GetMapping("/checkaddress/{id}")
	public ResponseEntity<?> checkAddressbycustid(@PathVariable("id") long id){
		System.out.println(id);
		Address address=aService.getbycustid(id);
		System.out.println(address);
		if(address!=null) {
			return ResponseEntity.ok(address);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Fill Address Before Purchasing");
	}
	
}
