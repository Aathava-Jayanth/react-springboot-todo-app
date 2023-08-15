package com.aathava.raect.service;

import java.util.List;

import com.aathava.raect.entity.Work;

public interface WorkService {

	public Work addWork(Work work);

	public List<Work> getWork();

	public Work updateWork(Long id, Work work);

	public String deleteWork(Long id);

	public Work getWorkById(Long id);

}
