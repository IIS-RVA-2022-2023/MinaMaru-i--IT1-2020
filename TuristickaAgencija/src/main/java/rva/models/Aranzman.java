package rva.models;

import java.io.Serializable;
import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;


@Table(name="Aranzman")
@Entity
public class Aranzman implements Serializable{

private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="Aranzman_ID_GENERATOR")
	@SequenceGenerator(name = "Aranzman_ID_GENERATOR", sequenceName = "Aranzman_SEQ", allocationSize = 1)
	private int id;
	
	@Column(name="Ukupna_cena")
	private int Ukupna_cena;
	
	private boolean Placeno;
	
	private Date Datum_realizacije;
	
	@ManyToOne
	@JoinColumn(name="Hotel")
	private Hotel Hotel;
	
	@ManyToOne
	@JoinColumn(name="Turisticka_agencija")
	private Turisticka_agencija Turisticka_agencija;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUkupna_cena() {
		return Ukupna_cena;
	}

	public void setUkupna_cena(int ukupna_cena) {
		this.Ukupna_cena = ukupna_cena;
	}

	public boolean isPlaceno() {
		return Placeno;
	}

	public void setPlaceno(boolean placeno) {
		this.Placeno = placeno;
	}

	public Date getDatum_realizacije() {
		return Datum_realizacije;
	}

	public void setDatum_realizacije(Date datum_realizacije) {
		this.Datum_realizacije = datum_realizacije;
	}

	public Hotel getHotel() {
		return Hotel;
	}

	public void setHotel(Hotel hotel) {
		this.Hotel = hotel;
	}

	public Turisticka_agencija getTuristicka_agencija() {
		return Turisticka_agencija;
	}

	public void setTuristicka_agencija(Turisticka_agencija turisticka_agencija) {
		this.Turisticka_agencija = turisticka_agencija;
	}
	
	
}
