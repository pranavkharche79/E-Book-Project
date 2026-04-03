package com.ebook.services;

public interface EmailService {
	
	String generateOTP();
	
	String sendEmailWithOTP(String toEmail,String subject);

}
