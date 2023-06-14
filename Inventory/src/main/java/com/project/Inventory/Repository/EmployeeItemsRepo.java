package com.project.inventory.repository;

import com.project.inventory.entity.EmployeeItems;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Employee and assigned items for employee repository interface.
*/

@Repository
public interface EmployeeItemsRepo extends JpaRepository<EmployeeItems, Long> {
  /**
   * delete employee by id.
  */
  void deleteByEmpId(Long empId);
}
