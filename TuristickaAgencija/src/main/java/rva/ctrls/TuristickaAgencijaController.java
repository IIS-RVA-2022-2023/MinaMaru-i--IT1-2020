package rva.ctrls;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rva.models.Turisticka_agencija;
import rva.service.TuristickaAgencijaService;

@CrossOrigin
@RestController
public class TuristickaAgencijaController{

	@Autowired
	private TuristickaAgencijaService turistickaAgencijaService;

	/*@GetMapping("/turistickaAgencija")
	public List<Turisticka_agencija> getAllTurAgencije(){
		return turistickaAgencijaService.getAllTurAgencije();//dodati celu rec
	}*/
	@GetMapping("/turistickaAgencija")
	public ResponseEntity<?> getAllTurAgencije(){
		List<Turisticka_agencija> turistickeAgencije = turistickaAgencijaService.getAllTuristickeAgencije();
		if(turistickeAgencije.isEmpty())
			return new ResponseEntity<>("turistickeAgencije - empty list", HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(turistickeAgencije, HttpStatus.OK);
	}

	/*@GetMapping("/turistickaAgencija/{id}")
	public Optional<Turisticka_agencija> getTuristickaAgencijaById(@PathVariable("id")int turistickaAgencijaId){
		return turistsickaAgencijaService.getTuristickaAgencijaById(turistickaAgencijaId);
	}*/
	@GetMapping("/turistickaAgencija/{id}")//vraca bas tu agenciju
	public ResponseEntity<?> getTuristickaAgencijaById(@PathVariable("id")int turistickaAgencijaId){
		if(turistickaAgencijaService.existsById(turistickaAgencijaId)) {
			Optional<Turisticka_agencija> turistickaAgencija = turistickaAgencijaService.getTuristickaAgencijalById(turistickaAgencijaId);
			return ResponseEntity.ok(turistickaAgencija);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND)
		        .body("TuristickaAgencija by id " + turistickaAgencijaId + " not found");
	}

	@GetMapping("/turistickaAgencija/naziv/{naziv}")
	public ResponseEntity<?> getAllTuristickeAgencijeByNaziv(@PathVariable("naziv")String naziv){
		List<Turisticka_agencija> turistickeAgencije = turistickaAgencijaService.getAllTuristickeAgencijeByNaziv(naziv);
		if(turistickeAgencije.isEmpty())
			return new ResponseEntity<>("TuristickeAgencije by naziv - empty list", HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(turistickeAgencije, HttpStatus.OK);
	}

	@GetMapping("/turistickaAgencija/pocetakNaziva/{pocetakNaziva}")
	public ResponseEntity<?> getAllTuristickeAgencijeByPocetakNaziva(@PathVariable("pocetakNaziva")String pocetakNaziva){
		List<Turisticka_agencija> turistickeAgencije = turistickaAgencijaService.getAllTuristickeAgencijeByPocetakNaziva(pocetakNaziva);
		if(turistickeAgencije.isEmpty())
			return new ResponseEntity<>("TuristickeAgencije by naziv - empty list", HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(turistickeAgencije, HttpStatus.OK);
	}
	@PostMapping("/turistickaAgencija")
 	public ResponseEntity<?> postTuristickaAgencija(@RequestBody Turisticka_agencija turistickaAgencija){
 		if(turistickaAgencijaService.existsById(turistickaAgencija.getId())) {
 			return ResponseEntity.status(HttpStatus.CONFLICT)
 			        .body("Turisticka Agencija with id " + turistickaAgencija.getId() + " already exists");
 		}
 		Turisticka_agencija savedTuristickaAgencija = turistickaAgencijaService.addTuristickaAgnecija(turistickaAgencija);
 		return new ResponseEntity<>(savedTuristickaAgencija, HttpStatus.OK);
 	}
	@PutMapping("/turistickaAgencija/{id}")
 	public ResponseEntity<?> putTuristickaAgencija(@PathVariable("id")int turistickaAgencijaId, 
 			@RequestBody Turisticka_agencija turistickaAgencija){
		turistickaAgencija.setId(turistickaAgencijaId);
 		if(!turistickaAgencijaService.existsById(turistickaAgencija.getId())) {
 			return ResponseEntity.status(HttpStatus.NOT_FOUND)
 			        .body("Turisticka Agencija with id " + turistickaAgencija.getId() + " not found");
 		}		
 		Turisticka_agencija updatedTuristickaAgencija = turistickaAgencijaService.addTuristickaAgnecija(turistickaAgencija);
 		return new ResponseEntity<>(updatedTuristickaAgencija, HttpStatus.OK);
 	}

 	@DeleteMapping("/turistickaAgencija/{id}")
 	public ResponseEntity<?> deleteTuristickaAgencija(@PathVariable("id")int turistickaAgencijaId){
 		if(!turistickaAgencijaService.existsById(turistickaAgencijaId)) {
 			return ResponseEntity.status(HttpStatus.NOT_FOUND)
 			        .body("Turisticka agencija with id " + turistickaAgencijaId + " not found");
 		}
 		turistickaAgencijaService.deleteById(turistickaAgencijaId);
 		return new ResponseEntity<>("Turisticka agencija with id " + turistickaAgencijaId + " has been deleted", HttpStatus.OK);
 	}
 	
	

}