package com.project.Inventory.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Inventory.Entity.InventoryItems;

public interface ItemRepo extends JpaRepository<InventoryItems,Integer>{

	List<InventoryItems> findByEmpIdIsNull();

	List<InventoryItems> findByEmpIdIsNotNull();

	List<InventoryItems> findByEmpId(Long id);
}
