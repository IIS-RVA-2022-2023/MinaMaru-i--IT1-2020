package rva.repository;

import org.springframework.data.jpa.repository.JpaRepository;

 import rva.models.Destinacija;
 import rva.models.Hotel;
 
public interface HotelRepository extends JpaRepository<Hotel, Integer>{


}
