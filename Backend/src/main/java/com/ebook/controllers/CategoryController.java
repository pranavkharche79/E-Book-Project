package com.ebook.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ebook.entites.Category;
import com.ebook.services.CategoryService;

@CrossOrigin
@RestController
@RequestMapping("api/category")
public class CategoryController {
	
	@Autowired
	private CategoryService cService;
	
	@GetMapping
	public ResponseEntity<?> getallcategories(){
		return ResponseEntity.ok(cService.getAllCategories());
	}
	
	@PostMapping
	public ResponseEntity<?> addCategory(@RequestParam("catname") String cat){
		Category cobj=new Category(cat);
		cService.addcategory(cobj);
		return ResponseEntity.ok("Category Added Successfully");
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<?> deleteCategory(@PathVariable("id") int id){
		System.out.println(id);
		cService.deletecat(id);
		return ResponseEntity.ok("Category Deleted Successfully");
	}
	
}
