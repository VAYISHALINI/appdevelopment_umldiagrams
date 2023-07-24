package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.BusData;

public interface BusDataRepo extends JpaRepository<BusData,Integer> {
	public List<BusData> findBySourceAndDestination(String source, String destination);
}
