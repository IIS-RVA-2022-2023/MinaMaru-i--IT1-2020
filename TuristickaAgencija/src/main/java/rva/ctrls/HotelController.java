package rva.ctrls;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rva.models.*;
import rva.service.DestinacijaService;
import rva.service.HotelService;

@CrossOrigin
@RestController
public class HotelController {

	@Autowired
	private HotelService hotelService;


	@Autowired
	private DestinacijaService destinacijaService;

	@GetMapping("/hotel")
	public ResponseEntity<List<Hotel>> getAll() {
		List<Hotel> hotels = hotelService.getAll();
		return new ResponseEntity<>(hotels, HttpStatus.OK);
	}

	@GetMapping("/hotel/{id}")
	public ResponseEntity<Hotel> getOne(@PathVariable("id") int id) {
		if (hotelService.existsById(id)) {
			Optional<Hotel> hotelOpt = hotelService.findById(id);
			return new ResponseEntity<>(hotelOpt.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/hotel/naziv/{naziv}")
	public ResponseEntity<?> getHotelByNaziv(@PathVariable("naziv")String naziv){
		List<Hotel> hotel = hotelService.getAllHotelByNaziv(naziv);
		if(hotel.isEmpty())
			return new ResponseEntity<>("Hotel by naziv - empty list", HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(hotel, HttpStatus.OK);
	}
	
	//vraca koji se hoteli nalaze na id-ju prosledjene destinacija
	 @GetMapping("destinacijaHotel/{id}")
     public ResponseEntity<?> getHotelByDestinacija(@PathVariable("id") int id) {
         Optional<Destinacija> destinacijaOpt = destinacijaService.findById(id);
         if (destinacijaOpt.isPresent()) {
             List<Hotel> hotels = hotelService
             		.findByDestinacija(destinacijaOpt.get());            
             if(hotels.isEmpty()) {
             	return new ResponseEntity<>("Na destinaciji nema hotela",
             			HttpStatus.NOT_FOUND);
             }
             return new ResponseEntity<>(hotels, HttpStatus.OK);
         }
         return new ResponseEntity<>("Destinacija nije pronadjena", HttpStatus.NOT_FOUND);
     }

	
	@PostMapping("/hotel")//!
    public ResponseEntity<?> addHotel(@RequestBody Hotel hotel) {
    	if(!hotelService.existsById(hotel.getId())) {
    		Hotel savedHotel = hotelService.save(hotel);
    		return ResponseEntity.status(HttpStatus.OK).body(savedHotel);
    	}else {
    		return ResponseEntity.status(HttpStatus.CONFLICT).body("Resource with the same ID already exists");
    	}       
    }

	
	@PutMapping(value = "/hotel/{id}")
	public ResponseEntity<Hotel> updateHotel(@RequestBody Hotel hotel,
			@PathVariable("id") int id) {
		if (hotelService.existsById(id)) {
			hotel.setId(id);
			Hotel savedHotel = hotelService.save(hotel);
			return ResponseEntity.ok().body(savedHotel);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	
	@DeleteMapping("/hotel/{id}")
    public ResponseEntity<?> delete(@PathVariable int id) {
    	if(hotelService.existsById(id)) {
    		hotelService.deleteById(id);
    		return ResponseEntity.ok("Resource with an id:" + id + " has been deleted");
    	}else {
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Requested resource has not been found");
    	}
    }
	}