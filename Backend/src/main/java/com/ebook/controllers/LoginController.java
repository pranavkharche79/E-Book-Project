package com.ebook.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ebook.entites.Customer;
import com.ebook.entites.Login;
import com.ebook.services.CustomerService;
import com.ebook.services.LoginService;
import com.ebook.supports.CustomerDTO;
import com.ebook.supports.LoginDTO;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@CrossOrigin
@RestController
@RequestMapping("api/login")
public class LoginController {
	
	@Autowired
	LoginService lService;
	@Autowired
	CustomerService cService;
	
	@PostMapping("/validate")
	public ResponseEntity<?> validate(@RequestBody LoginDTO dto){
		System.out.println("Login dto="+dto);
		Login u=lService.validate(dto);
		if(u!=null) {
			return ResponseEntity.ok(u);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	@PostMapping("/google/validate")
	public ResponseEntity<?> validategoogle(@RequestBody LoginDTO dto,@RequestBody String name){
		System.out.println("google login"+dto+"name= "+name );
		Optional<Login> ob=lService.validategoogle(dto);
		System.out.println("google object= "+ob);
		if(ob==null) {
			Login u=cService.createCustomer(dto.getEmail(),name);
			return ResponseEntity.ok(u);
		}
		return ResponseEntity.ok(ob);
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> RegisterCustomer(@RequestBody CustomerDTO cust){
		System.out.println(cust);
		Optional<Login> ob=lService.validategoogle(new LoginDTO(cust.getEmail(),cust.getPassword()));
		System.out.println("obbb=="+ob);
		if(ob.isPresent()) {
			System.out.println("bad");
			return ResponseEntity.badRequest().body("This Email is already Registered");
		}
		cService.registerCustomer(cust);
		return ResponseEntity.ok("Registered Successfully");
	}
	
}
