package rva.ctrls;

import java.net.URI;
import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
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
    private JdbcTemplate jdbcTemplate;
	
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
//ovde dodala 
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
	public ResponseEntity<Aranzman> addAranzman(@RequestBody Aranzman aranzman){
		Aranzman savedAranzman;
		
		if(!aranzmanService.existsById(aranzman.getId())) {
			savedAranzman = aranzmanService.save(aranzman);
		} else {
			List<Aranzman> lista = aranzmanService.getAll();
			int najvecaVrednost = 1;
			for(int i=0; i<lista.size(); i++) {
				if(najvecaVrednost <= lista.get(i).getId()) {
					najvecaVrednost = lista.get(i).getId();
				}
				
				if(i == lista.size() - 1) {
					najvecaVrednost++;
				}
			}
			aranzman.setId(najvecaVrednost);
			savedAranzman = aranzmanService.save(aranzman);
		}
		URI uri = URI.create("/aranzman/" + savedAranzman.getId());
		return ResponseEntity.created(uri).body(savedAranzman);
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
    	if (aranzmanService.existsById(id)) {
    		
			if (id == -100) {
				aranzmanService.deleteById(id);
				jdbcTemplate.execute("INSERT INTO \"aranzman\"(\"id\", \"datum_realizacije\", \"placeno\", \"ukupna_cena\", \"hotel\", \"turisticka_agencija\") values (-100, 'to_date('01.03.2023.', 'dd.mm.yyyy.')', '123', 1, 1)");
				return new ResponseEntity <Aranzman> (HttpStatus.OK);
			} else {
				aranzmanService.deleteById(id);
				return new ResponseEntity <Aranzman> (HttpStatus.OK);
			}
		} else {
			return new ResponseEntity <Aranzman> (HttpStatus.NOT_FOUND);
		}
    }
 }
