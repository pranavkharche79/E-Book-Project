package com.ebook.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ebook.daos.AddressDao;
import com.ebook.entites.Address;

@Service
public class AddressServiceImpl implements AddressService{
	
	@Autowired
	private AddressDao adao;

	@Override
	public Optional<Address> getbycustid(Long id) {
		
		return adao.getbycustid(id);
	}
	
	
	

}
