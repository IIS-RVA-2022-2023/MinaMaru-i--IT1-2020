package rva.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rva.models.Turisticka_agencija;
import rva.repository.TuristickaAgencijaRepository;

@Service
public class TuristickaAgencijaService {

	@Autowired
 	private TuristickaAgencijaRepository turistickaAgencijaRepository;

 	public List<Turisticka_agencija> getAllTuristickeAgencije(){
 		return turistickaAgencijaRepository.findAll();
 	}

 	public Optional<Turisticka_agencija> getTuristickaAgencijalById(int turistickaAgencijaId) {
 		return turistickaAgencijaRepository.findById(turistickaAgencijaId);
 	}

 	public boolean existsById(int id) {
 		return getTuristickaAgencijalById(id).isPresent();
 	}

 	public List<Turisticka_agencija> getAllTuristickeAgencijeByNaziv(String naziv){
 		return turistickaAgencijaRepository.findByNazivContainingIgnoreCase(naziv);
 	}

 	public List<Turisticka_agencija> getAllTuristickeAgencijeByPocetakNaziva(String pocetakNaziva){
 		return turistickaAgencijaRepository.getTuristickeAgencijeByPocetakNaziva(pocetakNaziva.toLowerCase());
 	}
 }
