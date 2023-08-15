package com.aathava.raect.exception;



public class ResourceNotFoundException extends RuntimeException
{

	private static final long serialVersionUID = 1L;
	
	public ResourceNotFoundException(Long id) {
		super("Could Not Find The User id : "+id);
	}
	
	

}
