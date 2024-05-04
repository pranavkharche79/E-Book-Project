package com.ebook.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ebook.entites.Address;

@Repository
public interface AddressDao extends JpaRepository<Address,Integer>{
	
	@Query(value = "select * from addresses where cust_id=?",nativeQuery = true)
	Optional<Address> getbycustid(Long id);

}
