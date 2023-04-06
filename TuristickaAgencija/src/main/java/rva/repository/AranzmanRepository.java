package rva.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

 import rva.models.Aranzman; 
public interface AranzmanRepository extends JpaRepository<Aranzman, Integer>{

	List<Aranzman> findByPlacenoTrue();


 	
	
}