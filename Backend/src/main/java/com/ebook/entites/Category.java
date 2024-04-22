package com.ebook.entites;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Categories")
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String catname;
	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Category(String catname) {
		super();
		this.catname = catname;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCatname() {
		return catname;
	}
	public void setCatname(String catname) {
		this.catname = catname;
	}
	@Override
	public String toString() {
		return "Category [id=" + id + ", catname=" + catname + "]";
	}
}
