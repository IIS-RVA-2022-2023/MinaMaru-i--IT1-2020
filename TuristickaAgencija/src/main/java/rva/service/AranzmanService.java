package rva.service;

 import java.util.List;
 import java.util.Optional;

 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.Service;

 import rva.repository.AranzmanRepository;
 import rva.models.*;

 @Service
 public class AranzmanService {
 	@Autowired
 	private AranzmanRepository aranzmanRepository;

 	
 	public List<Aranzman> getAll() {
 		return aranzmanRepository.findAll();
 	}

 	public Optional<Aranzman> findById(int id) {
 		return aranzmanRepository.findById(id);
 	}

 	public Aranzman save(Aranzman aranzman) {
 		return aranzmanRepository.save(aranzman);
 	}

 	public boolean existsById(int id) {
 		if (aranzmanRepository.findById(id) != null) {
 			return true;
 		} else {
 			return false;
 		}
 	}

 	public List<Aranzman> findByPlacenoTrue() {
         return aranzmanRepository.findByPlacenoTrue();
     }

 	public void deleteById(int id) {
 		aranzmanRepository.deleteById(id);
 	}
 	public List<Aranzman> findByHotel(Hotel hotel) {
 		return aranzmanRepository.findByHotel(hotel);
 	}

 	
 }