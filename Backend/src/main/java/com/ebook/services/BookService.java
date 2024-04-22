package com.ebook.services;

import java.io.IOException;

import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import com.ebook.entites.Book;

public interface BookService {

	void addbook(Book obj, MultipartFile file) throws IOException;

	Book getbookbyid(int id);

	Page<Book> allbookpaginated(int page, int pagesize);

	void deletebook(int id);

	void updatebook(Book b);

}
