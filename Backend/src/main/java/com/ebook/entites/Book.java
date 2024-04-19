package com.ebook.entites;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Books")
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bookid;
	private String bname;
	private double bprice;
	@ManyToOne
	@JoinColumn(name = "cat_id")
	private Category category;
	private String bimage;
	private String bread;
	private String btype;
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Book(int bookid, String bname, double bprice, Category category, String bimage, String bread, String btype) {
		super();
		this.bookid = bookid;
		this.bname = bname;
		this.bprice = bprice;
		this.category = category;
		this.bimage = bimage;
		this.bread = bread;
		this.btype = btype;
	}
	public int getBookid() {
		return bookid;
	}
	public void setBookid(int bookid) {
		this.bookid = bookid;
	}
	public String getBname() {
		return bname;
	}
	public void setBname(String bname) {
		this.bname = bname;
	}
	public double getBprice() {
		return bprice;
	}
	public void setBprice(double bprice) {
		this.bprice = bprice;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public String getBimage() {
		return bimage;
	}
	public void setBimage(String bimage) {
		this.bimage = bimage;
	}
	public String getBread() {
		return bread;
	}
	public void setBread(String bread) {
		this.bread = bread;
	}
	public String getBtype() {
		return btype;
	}
	public void setBtype(String btype) {
		this.btype = btype;
	}
	@Override
	public String toString() {
		return "Book [bookid=" + bookid + ", bname=" + bname + ", bprice=" + bprice + ", category=" + category
				+ ", bimage=" + bimage + ", bread=" + bread + ", btype=" + btype + "]";
	}
	
}
