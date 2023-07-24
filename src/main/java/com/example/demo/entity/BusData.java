package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class BusData {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int BusId;
	
	private String source;
	private String destination;
	private String date;
	private String busName;
	private String duration;
	private String arrival;
	private String departure;
	private String ratings;
	private String busType;
	private int seatsavailable;
	private String BusFare;
	
}
