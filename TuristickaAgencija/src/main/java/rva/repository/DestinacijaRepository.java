package rva.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

 import rva.models.Destinacija;
 
public interface DestinacijaRepository extends JpaRepository<Destinacija, Integer>{

	List<Destinacija> findByMestoContainingIgnoreCase(String mesto);
}