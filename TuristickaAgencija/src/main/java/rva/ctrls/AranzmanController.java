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

import rva.service.*;
import rva.models.*;

@CrossOrigin
@RestController
public class AranzmanController {

	
	@Autowired
    private AranzmanService aranzmanService;

   @Autowired
    private HotelService hotelService;

    @GetMapping("/aranzman")
    public ResponseEntity<List<Aranzman>> getAll() {
        List<Aranzman> aranzmans = aranzmanService.getAll();
        return new ResponseEntity<>(aranzmans, HttpStatus.OK);
    }

    @GetMapping("/aranzman/{id}")
    public ResponseEntity<Aranzman> getOne(@PathVariable("id") int id) {
        if (aranzmanService.findById(id).isPresent()) {
            Optional<Aranzman> aranzmanOpt = aranzmanService.findById(id);
            return new ResponseEntity<>(aranzmanOpt.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }
   

    @GetMapping("/placenAranzman")
 	public ResponseEntity<List<Aranzman>> placeneAranzman() {
 		List<Aranzman> aranzmans = aranzmanService.findByPlacenoTrue();
 		return new ResponseEntity<>(aranzmans, HttpStatus.OK);
 	}
//ovde dodala /
    @PutMapping("/aranzman/{id}")
    public ResponseEntity<Aranzman> updateOne(@RequestBody Aranzman aranzman,
            @PathVariable("id") int id) {
        if (!aranzmanService.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        aranzman.setId(id);
        Aranzman savedAranzman = aranzmanService.save(aranzman);
        return ResponseEntity.ok().body(savedAranzman);
    }
 
    @PostMapping("/aranzman")
    public ResponseEntity<?> addAranzman(@RequestBody Aranzman aranzman) {
    	if(aranzmanService.existsById(aranzman.getId())) {
    		Aranzman savedAranzman = aranzmanService.save(aranzman);
    		return ResponseEntity.status(HttpStatus.OK).body(savedAranzman);
    	}else {
   		return ResponseEntity.status(HttpStatus.CONFLICT).body("Resource with the same ID already exists");
   	}       
   }
 
    @GetMapping("/aranzmanHotel/{id}")
    public ResponseEntity<?> getAranzmanByHotel(@PathVariable("id") int id) {
        Optional<Hotel> hotelOpt = hotelService.findById(id);
        if (hotelOpt.isPresent()) {
            List<Aranzman> aranzmans = aranzmanService
            		.findByHotel(hotelOpt.get());            
            if(aranzmans.isEmpty()) {
            	return new ResponseEntity<>("Za dati hotel nema aranzmana",
            			HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(aranzmans, HttpStatus.OK);
        }
        return new ResponseEntity<>("Hotel nije pronadjen", HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("/aranzman/{id}")
    public ResponseEntity<?> delete(@PathVariable int id) {
    	if(aranzmanService.existsById(id)) {
    		aranzmanService.deleteById(id);
    		return ResponseEntity.ok("Resource with an id:" + id + " has been deleted");
    	}else {
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Requested resource has not been found");
    	}
    }
 }

