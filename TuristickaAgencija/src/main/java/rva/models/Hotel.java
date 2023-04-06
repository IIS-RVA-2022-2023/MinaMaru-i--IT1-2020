package rva.models;

import java.io.Serializable;
//import java.util.List;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
//import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;


@Entity
public class Hotel implements Serializable{
	
private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="HOTEL_ID_GENERATOR")
	@SequenceGenerator(name = "HOTEL_ID_GENERATOR", sequenceName = "HOTEL_SEQ", allocationSize = 1)
	private int id;
	
	private String naziv;
	
	@Column(name="Broj_zvezdica")
	private int Broj_zvezdica;
	
	
	private String Opis;
	
	@ManyToOne
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name="Destinacija")
	private Destinacija Destinacija;

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

	public int getBroj_zvezdica() {
		return Broj_zvezdica;
	}

	public void setBroj_zvezdica(int broj_zvezdica) {
		this.Broj_zvezdica = broj_zvezdica;
	}

	public String getOpis() {
		return Opis;
	}

	public void setOpis(String opis) {
		this.Opis = opis;
	}

	public Destinacija getDestinacija() {
		return Destinacija;
	}

	public void setDestinacija(Destinacija destinacija) {
		this.Destinacija = destinacija;
	}
	
	

	
}