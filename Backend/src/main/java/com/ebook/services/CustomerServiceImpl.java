package com.ebook.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ebook.daos.CustomerDao;
import com.ebook.daos.LoginDao;
import com.ebook.entites.Customer;
import com.ebook.entites.Login;
import com.ebook.supports.CustomerDTO;

@Service
public class CustomerServiceImpl implements CustomerService {
	@Autowired
	CustomerDao cdao;
	@Autowired
	LoginService lService;

	@Override
	public Login createCustomer(String email, String name) {
		Customer c = new Customer();
		c.setEmail(email);
		c.setName(name);
		cdao.save(c);
		Customer customer = null;
		customer = cdao.getbyemail(c.getEmail());
		Login ob = new Login(customer.getEmail(), customer.getPassword(), "Customer", customer.getId());
		return lService.savetologin(ob);
	}

	@Override
	public void registerCustomer(CustomerDTO c) {
		Customer cust = new Customer(c.getName(),c.getEmail(),c.getPassword(),c.getPhone(),c.getGender());
		cdao.save(cust);
		Customer customer = null;
		customer = cdao.getbyemail(cust.getEmail());
		Login ob = new Login(customer.getEmail(), customer.getPassword(), "Customer", customer.getId());
		lService.savetologin(ob);

	}

}
