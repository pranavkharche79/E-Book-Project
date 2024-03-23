package com.ebook.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ebook.entites.Login;

public interface LoginDao extends JpaRepository<Login,String>{

	@Query(value = "select * from logins where username=? and password=?",nativeQuery = true)
	Login validate(String username, String password);
	
}
