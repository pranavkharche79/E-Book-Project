package com.ebook.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ebook.entites.Admin;

@Repository
public interface AdminDao extends JpaRepository<Admin, String>{

	@Query(value = "select * from logins where username=? and password=?",nativeQuery = true)
	Admin validate(String username, String password);
	
}
