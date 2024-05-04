package com.ebook.entites;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Carts")
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long cid;
	private long book_id;
	private long cust_id;
	private String bname;
	private double bprice;
	private String bimage;
	private int qty;
	private double tprice;
	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Cart(long cid, long book_id, long cust_id, String bname, double bprice, String bimage, int qty,
			double tprice) {
		super();
		this.cid = cid;
		this.book_id = book_id;
		this.cust_id = cust_id;
		this.bname = bname;
		this.bprice = bprice;
		this.bimage = bimage;
		this.qty = qty;
		this.tprice = tprice;
	}
	public long getCid() {
		return cid;
	}
	public void setCid(long cid) {
		this.cid = cid;
	}
	public long getBook_id() {
		return book_id;
	}
	public void setBook_id(long book_id) {
		this.book_id = book_id;
	}
	public long getCust_id() {
		return cust_id;
	}
	public void setCust_id(long cust_id) {
		this.cust_id = cust_id;
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
	public String getBimage() {
		return bimage;
	}
	public void setBimage(String bimage) {
		this.bimage = bimage;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	public double getTprice() {
		return tprice;
	}
	public void setTprice(double tprice) {
		this.tprice = tprice;
	}
	@Override
	public String toString() {
		return "Cart [cid=" + cid + ", book_id=" + book_id + ", cust_id=" + cust_id + ", bname=" + bname + ", bprice="
				+ bprice + ", bimage=" + bimage + ", qty=" + qty + ", tprice=" + tprice + "]";
	}

}
