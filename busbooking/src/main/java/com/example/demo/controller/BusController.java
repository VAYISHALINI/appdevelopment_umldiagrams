package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.BusData;
import com.example.demo.entity.User;
import com.example.demo.entity.booking;
import com.example.demo.repository.BookingRepo;
import com.example.demo.repository.BusDataRepo;
import com.example.demo.repository.UserRepo;
import com.example.demo.service.BusService;

@RestController
@CrossOrigin(origins="*",allowedHeaders="*")
@RequestMapping("/getbus")
public class BusController {
  @Autowired 
   UserRepo repo;
  @Autowired 
  BusDataRepo busdatarepo;
  @Autowired
  BusService Ser;
  @Autowired
  BookingRepo book;
  
  @PostMapping("/post")
  public String create(@RequestBody User u) {
	repo.save(u);
	return "posted";
 }
  @GetMapping("/getvalues")
  List<BusData> getList(){
	 return busdatarepo.findAll();
}
  @PostMapping("/bookingpost")
  public String createbooking(@RequestBody booking b) {
	  book.save(b);
	  return "booking posted";
  }
  @GetMapping("/search/{source}/{destination}")
	public List<BusData> getSearch(@PathVariable String source,@PathVariable String destination){
		return busdatarepo.findBySourceAndDestination(source, destination);
	}
  
}
