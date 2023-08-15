package com.aathava.raect.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.aathava.raect.entity.Work;


@Repository
public interface WorkRepo extends JpaRepository<Work, Long> 
{

}
