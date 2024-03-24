package com.ebook.entites;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Logins")
public class Login {
	@Id
	private String email;
	private String password;
	private String role;
	private long id;
	
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Login(String email, String password, String role, long id) {
		super();
		this.email = email;
		this.password = password;
		this.role = role;
		this.id = id;
	}

	public String getemail() {
		return email;
	}

	public void setemail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Login [email=" + email + ", password=" + password + ", role=" + role + ", id=" + id + "]";
	}
	
}
