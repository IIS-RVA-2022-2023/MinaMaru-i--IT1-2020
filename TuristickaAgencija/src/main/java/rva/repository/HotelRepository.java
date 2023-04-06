package rva.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

 import rva.models.Hotel;
 
public interface HotelRepository extends JpaRepository<Hotel, Integer>{



	List<Hotel> findByNazivContainingIgnoreCase(String naziv);
	
}