package com.ebook.services;

import java.util.Optional;

import com.ebook.entites.Address;

public interface AddressService {

	Address getbycustid(Long id);

	void updateAddress(Address addr);

	void savAddress(Address addr);
	
}
