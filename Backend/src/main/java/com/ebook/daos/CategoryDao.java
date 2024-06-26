package com.ebook.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ebook.entites.Category;

@Repository
public interface CategoryDao extends JpaRepository<Category, Integer> {

}
