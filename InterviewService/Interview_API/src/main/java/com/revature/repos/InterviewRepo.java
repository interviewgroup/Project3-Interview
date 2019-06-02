package com.revature.repos;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.models.*;

public interface InterviewRepo extends JpaRepository<Interview, Integer> {
	
	Interview findById(int id);
	
	Page<Interview> findAll(Pageable pageable);
	
	List<Interview> findByAssociateEmail(String email);

}
