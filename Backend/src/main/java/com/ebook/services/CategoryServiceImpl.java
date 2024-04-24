package com.ebook.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ebook.daos.CategoryDao;
import com.ebook.entites.Category;

@Service
public class CategoryServiceImpl implements CategoryService{
	
	@Autowired
	private CategoryDao cdao;

	@Override
	public List<Category> getAllCategories() {
		return cdao.findAll();
	}

	@Override
	public void addcategory(Category cobj) {
		cdao.save(cobj);
	}

	@Override
	public void deletecat(int id) {
		cdao.deleteById(id);
	}
	
	
}
