package com.ebook;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import com.ebook.services.AdminService;

@SpringBootApplication
@EnableJpaAuditing
public class EbookApplication {

	public static void main(String[] args) {
		SpringApplication.run(EbookApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner createadmin(AdminService aserv) {
		if(aserv.count()==0) {
			aserv.createadmin();		
		}
		return null;
	}

}
