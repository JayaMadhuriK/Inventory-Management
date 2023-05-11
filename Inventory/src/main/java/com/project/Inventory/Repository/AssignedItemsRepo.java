package com.project.Inventory.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Inventory.Entity.AssignedItems;

public interface AssignedItemsRepo extends JpaRepository<AssignedItems,Long> {

}
