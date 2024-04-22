package com.ebook.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ebook.entites.Book;

@Repository
public interface BookDao extends JpaRepository<Book,Integer>{

}
