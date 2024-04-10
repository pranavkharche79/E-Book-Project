package com.ebook.services;

import java.util.Optional;

import com.ebook.entites.Admin;
import com.ebook.entites.Login;
import com.ebook.supports.LoginDTO;

public interface LoginService {

	Login validate(LoginDTO user);

	void createadmin(Admin admin);

	Optional<Login> validategoogle(LoginDTO dto);
	
	Login savetologin(Login ob);

}
