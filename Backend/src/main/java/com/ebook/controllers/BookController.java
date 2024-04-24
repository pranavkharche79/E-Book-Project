package com.ebook.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ebook.entites.Book;
import com.ebook.entites.Category;
import com.ebook.services.BookService;

@CrossOrigin
@RestController
@RequestMapping("api/book")
public class BookController {
	
	@Autowired
	private BookService bService;
	@PostMapping
	public ResponseEntity<?> addBook(Book obj,@RequestParam("file") MultipartFile file ) throws IOException{
//		Category cat=new Category(category);
//		obj.setCategory(cat);
		System.out.println("book=" + obj);
		bService.addbook(obj,file);
		return ResponseEntity.ok("Book Added Successfully");
	}
	
	@GetMapping("/paginated")
	public ResponseEntity<?> getallbooks(int page,int pagesize){	
		Page<Book> data=bService.allbookpaginated(page,pagesize);
		return ResponseEntity.ok(data);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<?> getBookbyid(@PathVariable("id")int id){
		Book book=bService.getbookbyid(id);
		return ResponseEntity.ok(book);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<?> deletebookbyid(@PathVariable("id")int id){
		bService.deletebook(id);
		return ResponseEntity.ok("Book Deleted Successfully");
	}
	
	@PutMapping("{id}")
	public ResponseEntity<?> updatebook(@RequestBody Book b){
		bService.updatebook(b);
		return ResponseEntity.ok("Book Updated Successfully");
	}
	
}
