package rva.models;

import java.io.Serializable;
import java.sql.Date;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

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
	
	@Column(name="ukupna_cena")
	private double ukupna_cena;
	
	private boolean placeno;
	
	private Date Datum_realizacije;
	
	@ManyToOne
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name="hotel")
	private Hotel hotel;
	
	@ManyToOne
	@JoinColumn(name="Turisticka_agencija")
	private Turisticka_agencija Turisticka_agencija;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getUkupna_cena() {
		return ukupna_cena;
	}

	public void setUkupna_cena(int ukupna_cena) {
		this.ukupna_cena = ukupna_cena;
	}

	public boolean isPlaceno() {
		return placeno;
	}

	public void setPlaceno(boolean placeno) {
		this.placeno = placeno;
	}

	public Date getDatum_realizacije() {
		return Datum_realizacije;
	}

	public void setDatum_realizacije(Date datum_realizacije) {
		this.Datum_realizacije = datum_realizacije;
	}

	public Hotel getHotel() {
		return hotel;
	}

	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}

	public Turisticka_agencija getTuristicka_agencija() {
		return Turisticka_agencija;
	}

	public void setTuristicka_agencija(Turisticka_agencija turisticka_agencija) {
		this.Turisticka_agencija = turisticka_agencija;
	}
	
	
}