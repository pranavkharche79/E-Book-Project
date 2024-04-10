package com.ebook.services;

import com.ebook.entites.Login;
import com.ebook.supports.CustomerDTO;

public interface CustomerService {

	Login createCustomer(String email, String name);

	void registerCustomer(CustomerDTO cust);

}
