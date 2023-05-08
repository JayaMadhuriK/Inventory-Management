package com.project.Inventory.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Inventory.Entity.InventoryItems;

public interface ItemRepo extends JpaRepository<InventoryItems,Integer>{

}
