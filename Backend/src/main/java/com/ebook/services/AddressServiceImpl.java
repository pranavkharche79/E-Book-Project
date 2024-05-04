package com.ebook.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ebook.daos.AddressDao;
import com.ebook.daos.CustomerDao;
import com.ebook.entites.Address;

@Service
public class AddressServiceImpl implements AddressService{
	
	@Autowired
	private AddressDao adao;
	@Autowired
	private CustomerDao cdao;

	@Override
	public Address getbycustid(Long id) {
		return adao.getbycustid(id).orElse(null);
	}

	@Override
	public void updateAddress(Address addr) {
	  adao.save(addr);
	}

	@Override
	public void savAddress(Address addr) {
		adao.save(addr);
	}

}
