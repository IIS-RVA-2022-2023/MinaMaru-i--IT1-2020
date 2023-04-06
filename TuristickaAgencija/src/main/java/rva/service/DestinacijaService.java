package rva.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rva.models.Destinacija;
import rva.repository.DestinacijaRepository;

@Service
public class DestinacijaService {

	@Autowired
	private DestinacijaRepository destinacijaRepository;

	public List<Destinacija> getAll(){
		return destinacijaRepository.findAll();
	}

	public Optional<Destinacija> findById(int id) {
		return destinacijaRepository.findById(id);
	}
//naziv mesto
	public List<Destinacija> findByNazivContainingIgnoreCase(String mesto) {
        return destinacijaRepository.findByMestoContainingIgnoreCase(mesto);
    }
	
	public Destinacija save(Destinacija destinacija) {
 		return destinacijaRepository.save(destinacija);
 	}

	public boolean existsById(int id) {
		if(destinacijaRepository.findById(id) != null) {
			return true;
		}else {
			return false;
		}
	}

	public void deleteById(int id) {
		destinacijaRepository.deleteById(id);
	}

}