package com.ebook.services;

import java.util.List;

import com.ebook.entites.Category;

public interface CategoryService {
	
	List<Category> getAllCategories();

	void addcategory(Category cobj);

	void deletecat(int id);

}
