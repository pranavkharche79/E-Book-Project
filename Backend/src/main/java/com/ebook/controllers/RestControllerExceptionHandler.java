package com.ebook.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class RestControllerExceptionHandler {
	
	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<?> handleRunTimeException(RuntimeException ex){
		return ResponseEntity.badRequest().body(ex.getMessage());
	}
}
