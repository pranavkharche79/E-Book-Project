package com.ebook.daos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ebook.entites.Cart;

@Repository
public interface CartDao extends JpaRepository<Cart,Long>{
	
	@Query(value = "Select * from carts where book_id=? and cust_id=?",nativeQuery = true)
	Optional<Cart> checkBookInCart(long book_id, long cust_id);

	@Query(value = "Select * from carts where cust_id=?",nativeQuery = true)
	List<Cart> getCartBooks(long id);

}
