package com.aathava.raect.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aathava.raect.entity.Work;
import com.aathava.raect.service.WorkService;


@RestController
@RequestMapping("/api/works")
@CrossOrigin("http://localhost:3000")
public class WorkController 
{
	@Autowired
	private WorkService ser;
	
	@PostMapping
	public Work addWork(@RequestBody Work work)
	{
		return ser.addWork(work);
	}
	
	@GetMapping
	public List<Work> getWork()
	{
		return ser.getWork();
	}
	
	@GetMapping("{id}")
	public Work getWorkById(@PathVariable("id") Long id)
	{
		return ser.getWorkById(id);	
	}
	
	
	@PutMapping("{id}")
	public Work updateWork(@PathVariable("id") Long id ,@RequestBody Work work)
	{
		return ser.updateWork(id,work);
		
	}
	
	@DeleteMapping("{id}")
	public String deleteWork(@PathVariable Long id)
	{
		return ser.deleteWork(id);
		
	}
}
