package com.ebook.services;

import java.util.Random;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService{
	
	@Autowired
	private JavaMailSender javaMailSender;
	
	@Value("${spring.mail.username}")
	private String formEmail;

	@Override
	public String generateOTP() {
		// Generate a 6-digit random OTP
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000); // Range: [100000, 999999]
        return String.valueOf(otp);
	}

	@Override
	public String sendEmailWithOTP(String toEmail, String subject) {
		String otpString = generateOTP();
		String emailBody = "<html><body style='font-family: Arial, sans-serif; background-color: #f4f4f9; padding: 20px;'>"
		        + "<div style='max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); padding: 20px;'>"
		        + "<h2 style='font-size: 22px; color: #444444; text-align: center;'>Forgot Password Assistance</h2>"
		        + "<hr style='border: none; height: 1px; background-color: #e6e6e6; margin: 20px 0;'>"
		        + "<p style='font-size: 16px; color: #555555;'>Hi [User],</p>"
		        + "<p style='font-size: 16px; color: #555555;'>Forgot your password? Let's get you a new one. Your One-Time Password (OTP) for resetting your password is:</p>"
		        + "<div style='text-align: center; margin: 20px 0;'>"
		        + "<span style='font-size: 36px; color: #ff6347; font-weight: bold;'>" + otpString + "</span>"
		        + "</div>"
		        + "<p style='font-size: 16px; color: #555555;'>Please use this OTP to reset your password. This code will expire in 10 minutes.</p>"
		        + "<p style='font-size: 16px; color: #777777;'>If you did not request this, you can ignore this message.</p>"
		        + "<hr style='border: none; height: 1px; background-color: #e6e6e6; margin: 20px 0;'>"
		        + "<p style='font-size: 14px; color: #aaaaaa; text-align: center;'>Thanks for using our service.</p>"
		        + "</div>"
		        + "</body></html>";
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
            helper.setFrom(formEmail);
            helper.setTo(toEmail);
            helper.setSubject(subject);
            helper.setText(emailBody, true); // Set the content type to HTML
            javaMailSender.send(mimeMessage);
            System.out.println("Mail sent Successfully");
        } catch (MessagingException e) {
            throw new RuntimeException("Failed to send email", e);
        }
		
		return otpString;
	}

}
