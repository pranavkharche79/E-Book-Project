package com.ebook.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ebook.entites.Cart;
import com.ebook.services.CartService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@CrossOrigin
@RestController
@RequestMapping("api/cart")
public class CartController {
	
	@Autowired
	private CartService cartService;
	
	@PostMapping
	public ResponseEntity<?> addtocart(@RequestBody Cart c){
		System.out.println("Cart="+c);
		Optional<Cart> existing=cartService.checkBookInCart(c.getBook_id(),c.getCust_id());
		if(existing.isEmpty()) {
			cartService.addBookToCart(c);
			return ResponseEntity.ok("Book Added To Cart");
		}
		return ResponseEntity.status(HttpStatus.CONFLICT).body("Book Already In Cart");
	}
	
	@GetMapping("cartbooks/{id}")
	public ResponseEntity<?> getCartBooks(@PathVariable("id") long id){
		List<Cart> clist=new ArrayList<>();
		clist=cartService.getCartBooks(id);
		return ResponseEntity.ok(clist);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<?> deleteCartBook(@PathVariable long id){
		System.out.println(id);
		cartService.deleteCartBook(id);
		return ResponseEntity.ok("Book Removed From Cart");
	}
	
	
}
