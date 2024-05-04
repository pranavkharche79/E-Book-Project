package com.ebook.services;

import com.ebook.entites.Customer;
import com.ebook.entites.Login;
import com.ebook.supports.CustomerDTO;
import com.ebook.supports.CustomerProfileDTO;

public interface CustomerService {

	Login createCustomer(String email, String name);

	void registerCustomer(CustomerDTO cust);

	Customer getCustomerbyid(Long id);

	void updatecustomer(Customer cust);

}
