package com.aathava.raect.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aathava.raect.entity.Work;
import com.aathava.raect.exception.ResourceNotFoundException;
import com.aathava.raect.repo.WorkRepo;

@Service
public class WorkServiceImpl implements WorkService 
{

	@Autowired
	private WorkRepo repo;
	
	@Override
	public Work addWork(Work work) 
	{
		
		return repo.save(work);
	}

	@Override
	public List<Work> getWork() {
		return repo.findAll();
	}

	@Override
	public Work updateWork(Long id, Work work) {
		
		if(! repo.existsById(id))
		{
			throw new ResourceNotFoundException(id);
		}
		
		Work workcopy = repo.findById(id).get();
		
		if(Objects.nonNull(work.getTodo()) && !"".equalsIgnoreCase(work.getTodo()))
		{
			workcopy.setTodo(work.getTodo());
		}
		
		return repo.save(workcopy);
	}

	@Override
	public String deleteWork(Long id) {
		
		if(! repo.existsById(id))
		{
			throw new ResourceNotFoundException(id);
		}
		
		repo.deleteById(id);
		return "Id : "+id+" Deleted Successfully !!!";
	}

	@Override
	public Work getWorkById(Long id) {
		return repo.findById(id).get();
	}
	
}
