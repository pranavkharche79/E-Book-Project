package com.ebook.supports;

public class CustomerProfileDTO {
	private long id;
	private String name;
	private String email;
	private String password;
	private String phone;
	private String gender;	
	private String adrr;
	private String landmark;
	private String city;
	private String state;
	private String pincode;
	public CustomerProfileDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
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
	@Override
	public String toString() {
		return "CustomerProfileDTO [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password
				+ ", phone=" + phone + ", gender=" + gender + ", adrr=" + adrr + ", landmark=" + landmark + ", city="
				+ city + ", state=" + state + ", pincode=" + pincode + "]";
	}
	
}
