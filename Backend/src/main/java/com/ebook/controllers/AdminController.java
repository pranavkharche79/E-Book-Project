package com.ebook.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ebook.entites.Admin;
import com.ebook.services.AdminService;
import com.ebook.supports.LoginDTO;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@CrossOrigin
@RestController
@RequestMapping("api/admin")
public class AdminController {
	
	@Autowired
	AdminService aService;
	@GetMapping
	public String adminpage() {
		return "Admin page";
	}
}
