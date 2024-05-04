package com.ebook.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ebook.daos.CartDao;
import com.ebook.entites.Cart;

@Service
public class CartServiceImpl implements CartService{
	
	@Autowired
	private CartDao cdao;

	@Override
	public void addBookToCart(Cart c) {
		cdao.save(c);
	}

	@Override
	public Optional<Cart> checkBookInCart(long book_id, long cust_id) {
		return cdao.checkBookInCart(book_id,cust_id);
	}

	@Override
	public List<Cart> getCartBooks(long id) {
		return cdao.getCartBooks(id);
	}

	@Override
	public void deleteCartBook(long id) {
		cdao.deleteById(id);
	}

}
