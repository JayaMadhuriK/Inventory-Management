package com.project.Inventory.Service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.project.Inventory.Entity.InventoryItems;
import com.project.Inventory.Entity.Users;
import com.project.Inventory.Repository.ItemRepo;
import com.project.Inventory.Repository.UserRepo;
import com.project.Inventory.Service.InventoryItemService;

@Service
public class InventoryItemServiceImpl implements InventoryItemService {
	
	private final ItemRepo inventoryItemRepo;
	private final UserRepo userRepo;
	
	public InventoryItemServiceImpl(ItemRepo inventoryItemRepo,UserRepo userRepo)
	{
		this.inventoryItemRepo=inventoryItemRepo;
		this.userRepo=userRepo;
	}
	@Override
	public InventoryItems updateInventoryItem(int id,InventoryItems inventoryItems) {
		Optional<InventoryItems> inventoryPayload = inventoryItemRepo.findById(id);
		Optional<Users> userPayload =	userRepo.findById((long) 1);
		System.out.println(inventoryItems.getAssignedEmployee());
		inventoryPayload.get().setItemName(inventoryItems.getItemName());
		inventoryPayload.get().setCategory(inventoryItems.getCategory());
		inventoryPayload.get().setExpireDate(inventoryItems.getExpireDate());
		inventoryPayload.get().setWarranty(inventoryItems.getWarranty());
		inventoryPayload.get().setDateOfPurchase(inventoryItems.getDateOfPurchase());
		inventoryPayload.get().setAssignedEmployee(userPayload.get());
		return inventoryItemRepo.save(inventoryPayload.get());
	}

	@Override
	public InventoryItems addInventoryItem(InventoryItems inventoryItems) {
		
		return inventoryItemRepo.save(inventoryItems);
	}
           
	@Override
	public List<InventoryItems> getInventoryItems() {
		
		return inventoryItemRepo.findAll();
	}

	@Override
	public Optional<InventoryItems> findByInventoryItemId(@PathVariable int id) {
		
		return inventoryItemRepo.findById(id);
	}

	@Override
	public void deleteInventoryItem(@PathVariable int id) {
		
		inventoryItemRepo.deleteById(id);;
	}
	
}
