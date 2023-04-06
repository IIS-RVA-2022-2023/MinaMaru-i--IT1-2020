package rva.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rva.models.Destinacija;
import rva.models.Hotel;
import rva.repository.HotelRepository;

@Service
public class HotelService {

	@Autowired
	private HotelRepository hotelRepository;
	

	public List<Hotel> getAll(){
		return hotelRepository.findAll();
	}

	public Optional<Hotel> findById(int id) {
		return hotelRepository.findById(id);
	}

	public List<Hotel> getAllHotelByNaziv(String naziv){
 		return hotelRepository.findByNazivContainingIgnoreCase(naziv);
 	}
	
	public Hotel save(Hotel hotel) {
		return hotelRepository.save(hotel);
	}

	public boolean existsById(int id) {
		if(hotelRepository.findById(id).isPresent()) {
			return true;
		}else {
			return false;
		}
	}

	public void deleteById(int id) {
		hotelRepository.deleteById(id);
	}


 	public List<Hotel> findByDestinacija(Destinacija destinacija) {
 		return hotelRepository.findByDestinacija(destinacija);
 	}
}
