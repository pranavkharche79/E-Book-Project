package com.ebook.services;

import java.util.Optional;

import com.ebook.entites.Address;

public interface AddressService {

	Optional<Address> getbycustid(Long id);
	
}
