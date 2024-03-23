package com.ebook.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ebook.entites.Login;
import com.ebook.services.LoginService;
import com.ebook.supports.LoginDTO;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@CrossOrigin
@RestController
@RequestMapping("api/login")
public class LoginController {
	
	@Autowired
	LoginService lService;
	
	@PostMapping
	public ResponseEntity<?> validate(@RequestBody LoginDTO user){
		System.out.println(user);
		Login u=lService.validate(user);
		if(u!=null) {
			return ResponseEntity.ok(u);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
}
