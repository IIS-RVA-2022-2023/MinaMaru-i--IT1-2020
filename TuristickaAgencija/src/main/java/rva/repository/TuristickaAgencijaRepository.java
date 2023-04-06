package rva.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import rva.models.Turisticka_agencija;


public interface TuristickaAgencijaRepository extends JpaRepository<Turisticka_agencija, Integer> {

	List<Turisticka_agencija> findByNazivContainingIgnoreCase(String naziv);

 	/*1. NACIN
 	@Query(value="select * from turistickaAgencija where lower(naziv) like ?1%", nativeQuery = true)
 	List<Turisticka_agencija> getTuristickeAgencijeByPocetakNaziva(String pocetakNaziva);*/

	
 	//2. NACIN
 	@Query(value="select * from Turisticka_agencija where lower(naziv) like :pocetak%", nativeQuery = true)
 	List<Turisticka_agencija> getTuristickeAgencijeByPocetakNaziva(@Param("pocetak") String pocetakNaziva);
 
}