package rva.models;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.*;

@Entity
public class Turisticka_agencija implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="TURISTICKA_AGENCIJA_ID_GENERATOR")
	@SequenceGenerator(name = "TURISTICKA_AGENCIJA_ID_GENERATOR", sequenceName = "TURISTICKA_AGENCIJA_SEQ", allocationSize = 1)
	private int id;
	

	private String naziv;
	
	private String Adresa;
	
	private String Kontakt;
	
	@JsonIgnore
	@OneToMany(mappedBy = "Turisticka_agencija", cascade = CascadeType.REMOVE) 
	private List<Aranzman> Aranzman;
	
	public String getKontakt() {
		return Kontakt;
	}

	public void setKontakt(String kontakt) {
		Kontakt = kontakt;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNaziv() {
		return naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}

	public String getAdresa() {
		return Adresa;
	}

	public void setAdresa(String adresa) {
		this.Adresa = adresa;
	}

}
	
	
	
