package com.example.demo.entity;

import jakarta.persistence.Entity;
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

public class payment {

	@Id
	private int bookingId;
	
	private String PaymentType;
	private String PaymentStatus;
}
