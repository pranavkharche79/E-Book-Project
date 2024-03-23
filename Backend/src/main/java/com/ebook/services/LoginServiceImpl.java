package com.ebook.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ebook.daos.LoginDao;
import com.ebook.entites.Admin;
import com.ebook.entites.Login;
import com.ebook.supports.LoginDTO;

@Service
public class LoginServiceImpl implements LoginService{

	@Autowired
	LoginDao ldao;
	
	@Override
	public Login validate(LoginDTO user) {
		return ldao.validate(user.getUsername(),user.getPassword()); 
	}

	@Override
	public void createadmin(Admin admin) {
		System.out.println("Login admin="+admin);
		Login login=new Login(admin.getUsername(),admin.getPassword(),admin.getRole(),admin.getId());
		ldao.save(login);
	}
	
}
