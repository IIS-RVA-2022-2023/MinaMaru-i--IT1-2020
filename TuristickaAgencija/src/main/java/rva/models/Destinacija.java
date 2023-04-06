package rva.models;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;



@Entity
public class Destinacija implements Serializable{
	
private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="DESTINACIJA_ID_GENERATOR")
	@SequenceGenerator(name = "DESTINACIJA_ID_GENERATOR", sequenceName = "DESTINACIJA_SEQ", allocationSize = 1)
	private int id;
	
	private String mesto;
	
	private String Drzava;
	
	private String Opis;
	
	@JsonIgnore
	@OneToMany(mappedBy="Destinacija")
	private List<Hotel> Hotel; 
	//kreiramo listu hotel gde ce biti svi hoteli 
	//koji su na nekoj destinaciji
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getMesto() {
		return mesto;
	}
	public void setMesto(String mesto) {
		this.mesto = mesto;
	}
	public String getDrzava() {
		return Drzava;
	}
	public void setDrzava(String drzava) {
		this.Drzava = drzava;
	}
	public String getOpis() {
		return Opis;
	}
	public void setOpis(String opis) {
		this.Opis = opis;
	}

}