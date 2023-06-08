package com.project.Inventory.Service;

import java.util.List;
import java.util.Optional;

import com.project.Inventory.Entity.InventoryItems;

public interface InventoryItemService {
	InventoryItems addInventoryItem(InventoryItems inventoryItems);
	InventoryItems updateInventoryItem(int id,InventoryItems inventoryItems);
	List<InventoryItems> getInventoryItems();
	Optional<InventoryItems> findByInventoryItemId(int id);
	void deleteInventoryItem(int id);
	List<InventoryItems> findByEmpIdIsNull();
	List<InventoryItems> findByEmpIdIsNotNull();
}
