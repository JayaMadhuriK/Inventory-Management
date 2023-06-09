package com.project.Inventory.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Inventory.Entity.EmployeeItems;

public interface EmployeeItemsRepo extends JpaRepository<EmployeeItems,Long>{

	void deleteByEmpId(Long id);

}
