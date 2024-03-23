package com.ebook.entites;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Logins")
public class Login {
	@Id
	private String username;
	private String password;
	private String role;
	private long id;
	
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Login(String username, String password, String role, long id) {
		super();
		this.username = username;
		this.password = password;
		this.role = role;
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
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
		return "Login [username=" + username + ", password=" + password + ", role=" + role + ", id=" + id + "]";
	}
	
}
