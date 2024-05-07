package com.ebook.services;

import java.io.IOException;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.ebook.daos.BookDao;
import com.ebook.entites.Book;

@Service
public class BookServiceImpl implements BookService{
	
	@Autowired
	private Cloudinary cloudinary;
	
	@Autowired
	private BookDao bdao;

	@Override
	public void addbook(Book obj,MultipartFile file) throws IOException {
		String bimage=uploadFile(file);
		System.out.println("Book url= "+bimage);
		obj.setBimage(bimage);
		System.out.println("Obj==== " +obj);
		bdao.save(obj);
	}
	
	public String uploadFile(MultipartFile multipartFile) throws IOException {
//		System.out.println("file name="+multipartFile.getName()+"original file name="+multipartFile.getOriginalFilename());
        return cloudinary.uploader()
                .upload(multipartFile.getBytes(),
                        Map.of("public_id", UUID.randomUUID().toString()))
                .get("url")
                .toString();
    }

	@Override
	public Book getbookbyid(int id) {
		return bdao.getById(id);
	}

	@Override
	public Page<Book> allbookpaginated(int page, int pagesize) {
		Page<Book> books=bdao.findAll(PageRequest.of(page, pagesize));
		System.err.println(books.getSize());
		return books;
	}

	@Override
	public void deletebook(int id) {
		Book book=bdao.getById(id);
		bdao.delete(book);
	}

	@Override
	public void updatebook(Book b) {
		bdao.save(b);
	}
	
}
