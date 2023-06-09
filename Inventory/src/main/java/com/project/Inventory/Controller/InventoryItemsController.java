package com.project.Inventory.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.Inventory.Entity.InventoryItems;
import com.project.Inventory.Service.InventoryItemService;
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/inventory")
@RestController
public class InventoryItemsController {
	private final InventoryItemService inventoryItemService;
	public InventoryItemsController(InventoryItemService inventoryItemService)
	{
		this.inventoryItemService=inventoryItemService;
	}
	@GetMapping("/InventoryItems")
	public List<InventoryItems> getInventoryItems(){
		
		return inventoryItemService.getInventoryItems();
		
	}
	@GetMapping("/InventoryItems/{id}")
	public Optional<InventoryItems> findByInventoryItemId(@PathVariable int id)
	{
		return inventoryItemService.findByInventoryItemId(id);
	}
	@PostMapping("/InventoryItems")
	public InventoryItems addInventoryItem(@RequestBody InventoryItems inventoryItems)
	{
		return inventoryItemService.addInventoryItem(inventoryItems);
	}
	@PutMapping("/InventoryItems/{id}")
	public InventoryItems updateInventoryItem(@PathVariable int id,@RequestBody InventoryItems inventoryItems)
	{
		return inventoryItemService.updateInventoryItem(id,inventoryItems);
	}
	@DeleteMapping("/InventoryItems/{id}")
	public void deleteInventoryItem(@PathVariable int id)
	{
		inventoryItemService.deleteInventoryItem(id);
	}
	@GetMapping("/InventoryItems/unassign")
	public List<InventoryItems> findByEmpIdIsNull() {
		List<InventoryItems> unassignedItems = inventoryItemService.findByEmpIdIsNull();
		return unassignedItems ;
		
	}
	@GetMapping("/InventoryItems/assign")
	public List<InventoryItems> findByEmpIdIsNotNull() {
		List<InventoryItems> assignedItems = inventoryItemService.findByEmpIdIsNotNull();
		return assignedItems ;
		
	}

}
