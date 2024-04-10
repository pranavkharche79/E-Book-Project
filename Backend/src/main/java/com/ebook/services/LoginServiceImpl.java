package com.ebook.services;

import java.util.Optional;

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
	public void createadmin(Admin admin) {
		System.out.println("Login admin="+admin);
		Login login=new Login(admin.getemail(),admin.getPassword(),admin.getRole(),admin.getId());
		ldao.save(login);
	}
	
	@Override
	public Login validate(LoginDTO user) {
		return ldao.validate(user.getEmail(),user.getPassword());
	}


	@Override
	public Optional<Login> validategoogle(LoginDTO dto) {
		return ldao.findById(dto.getEmail());
	}

	@Override
	public Login savetologin(Login ob) {
		return ldao.save(ob);
	}
	
}
