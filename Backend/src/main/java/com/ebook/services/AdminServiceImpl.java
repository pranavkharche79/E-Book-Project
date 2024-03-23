package com.ebook.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ebook.daos.AdminDao;
import com.ebook.daos.LoginDao;
import com.ebook.entites.Admin;

@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	AdminDao adao;
	@Autowired
	LoginService lserv;

	@Override
	public void createadmin() {
		Admin admin=new Admin();
		admin.setUsername("Admin");
		admin.setPassword("Admin@123");
		admin.setRole("Admin");
		admin.setId(1);
		lserv.createadmin(admin);
		adao.save(admin); 
	}

	@Override
	public long count() {
		return adao.count();
	}
	
	
}
