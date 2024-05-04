package com.ebook.services;

import java.util.List;
import java.util.Optional;

import com.ebook.entites.Cart;

public interface CartService {

	void addBookToCart(Cart c);

	Optional<Cart>	checkBookInCart(long book_id, long cust_id);

	List<Cart> getCartBooks(long id);

	void deleteCartBook(long id);

}
