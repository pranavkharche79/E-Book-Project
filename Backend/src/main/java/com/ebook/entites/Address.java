package com.ebook.entites;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Addresses")
public class Address {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String adrr;
	private String landmark;
	private String city;
	private String state;
	private String pincode;
	@OneToOne
	@JoinColumn(name = "cust_id")
	private Customer cust;
	public Address() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Address(long id, String adrr, String landmark, String city, String state, String pincode, Customer cust) {
		super();
		this.id = id;
		this.adrr = adrr;
		this.landmark = landmark;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
		this.cust = cust;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getAdrr() {
		return adrr;
	}
	public void setAdrr(String adrr) {
		this.adrr = adrr;
	}
	public String getLandmark() {
		return landmark;
	}
	public void setLandmark(String landmark) {
		this.landmark = landmark;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public Customer getCust() {
		return cust;
	}
	public void setCust(Customer cust) {
		this.cust = cust;
	}
	@Override
	public String toString() {
		return "Address [id=" + id + ", adrr=" + adrr + ", landmark=" + landmark + ", city=" + city + ", state=" + state
				+ ", pincode=" + pincode + ", cust=" + cust + "]";
	}
}
