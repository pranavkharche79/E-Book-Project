package com.ebook.services;

import com.ebook.entites.Admin;
import com.ebook.entites.Login;
import com.ebook.supports.LoginDTO;

public interface LoginService {

	Login validate(LoginDTO user);

	void createadmin(Admin admin);

}
