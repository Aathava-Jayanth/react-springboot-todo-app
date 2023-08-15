package com.aathava.raect.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Work 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String todo;
	
	public Long getId() {
		return id;
	}
	public String getTodo() {
		return todo;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public void setTodo(String todo) {
		this.todo = todo;
	}
	
	
}
