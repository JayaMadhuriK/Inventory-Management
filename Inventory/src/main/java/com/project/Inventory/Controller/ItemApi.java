package com.project.Inventory.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.Inventory.Entity.InventoryItems;
import com.project.Inventory.Repository.ItemRepo;

@RestController
@RequestMapping("/items")
public class ItemApi {
	
	@Autowired
	ItemRepo itemrepo;
	
	@GetMapping
	public List<InventoryItems> list(){
		return itemrepo.findAll();
	}
}
