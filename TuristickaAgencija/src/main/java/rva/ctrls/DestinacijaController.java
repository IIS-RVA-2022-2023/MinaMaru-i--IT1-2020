package rva.ctrls;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.jdbc.core.JdbcTemplate;
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

@CrossOrigin
@RestController
public class DestinacijaController {

	 	@Autowired
	    private DestinacijaService destinacijaService;

	   /* @Autowired
	    private JdbcTemplate jdbcTemplate;*/

	    @GetMapping("/destinacija")
	    public ResponseEntity<List<Destinacija>> getAll() {
	        List<Destinacija> destinacijas = destinacijaService.getAll();
	        return new ResponseEntity<>(destinacijas, HttpStatus.OK);
	    }

	    @GetMapping("/destinacija/{id}")
	    public ResponseEntity<Destinacija> getOne(@PathVariable("id") int id) {
	        if (destinacijaService.findById(id).isPresent()) {
	            Optional<Destinacija> destinacijaOpt = destinacijaService.findById(id);
	            return new ResponseEntity<>(destinacijaOpt.get(), HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	        }
	    }


	    @GetMapping("/destinacija/mesto/{mesto}")
	    public ResponseEntity<List<Destinacija>> getByNaziv(@PathVariable("mesto") String mesto) {
	        List<Destinacija> destinacijas = destinacijaService.findByNazivContainingIgnoreCase(mesto);
	        return new ResponseEntity<>(destinacijas, HttpStatus.OK);
	    }
	    
	    @PostMapping("/destinacija")
	    public ResponseEntity<?> addDestinacija(@RequestBody Destinacija destinacija) {
	    	if(!destinacijaService.existsById(destinacija.getId())) {
	    		Destinacija savedDestinacija = destinacijaService.save(destinacija);
	            return ResponseEntity.status(HttpStatus.OK).body(savedDestinacija);
	    	}else {
	    		return ResponseEntity.status(HttpStatus.CONFLICT).body("Resource with the same ID already exists");
	    	}       
	    }
 
	    
	    

	    @PutMapping(value = "/destinacija/{id}")
	    public ResponseEntity<Destinacija> updateDestinacija(@RequestBody Destinacija destinacija, @PathVariable("id") int id) {
	        if (destinacijaService.existsById(id)) {
	            destinacija.setId(id);
	            Destinacija savedDestinacija = destinacijaService.save(destinacija);
	            return ResponseEntity.ok().body(savedDestinacija);
	        }
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }

	    @DeleteMapping("/destinacija/{id}")
	    public ResponseEntity<?> delete(@PathVariable int id) {
	    	if(!destinacijaService.existsById(id)) {
	    		return ResponseEntity.status(HttpStatus.NOT_FOUND).
	    				body("Destinacija with id " + id + " not found");
	    	}
	    		destinacijaService.deleteById(id);
	    		return new ResponseEntity<>("Destinacija with id " + id + " has been deleted", HttpStatus.OK);
	    	
	    }

}
