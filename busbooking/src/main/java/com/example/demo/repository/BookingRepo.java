package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.booking;

public interface BookingRepo extends JpaRepository<booking,Integer>{

}
