package com.ebook.supports;

public class LoginDTO {
	private String username;
	private String password;
	private String role;
	private long id;
	public LoginDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public LoginDTO(String username, String password, String role, long id) {
		super();
		this.username = username;
		this.password = password;
		this.role = role;
		this.id = id;
	}
	public LoginDTO(String username, String password, String role) {
		super();
		this.username = username;
		this.password = password;
		this.role = role;
	}
	public LoginDTO(String username, String password) {
		super();
		this.username = username;
		this.password = password;
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
	@Override
	public String toString() {
		return "LoginDTO [username=" + username + ", password=" + password + ", role=" + role + "]";
	}
	
}
