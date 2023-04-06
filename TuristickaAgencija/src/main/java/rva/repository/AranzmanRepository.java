package rva.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

 import rva.models.Aranzman;
import rva.models.Destinacija;
import rva.models.Hotel; 
public interface AranzmanRepository extends JpaRepository<Aranzman, Integer>{

	List<Aranzman> findByPlacenoTrue();
	List<Aranzman> findByHotel(Hotel hotel);

 	
	
}