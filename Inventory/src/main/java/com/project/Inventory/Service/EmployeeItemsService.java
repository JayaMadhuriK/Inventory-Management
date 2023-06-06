package com.project.Inventory.Service;

import java.util.List;
import java.util.Optional;

import com.project.Inventory.Entity.EmployeeItems;
import com.project.Inventory.Request.Reponse.EmployeeItemResponse;

public interface EmployeeItemsService {
	EmployeeItems addEmployeeItem(EmployeeItems employeeItems);
	EmployeeItems updateEmployeeItem(Long id,EmployeeItems employeeItems);
	List<EmployeeItems> getEmployeeItems();
	EmployeeItemResponse findByEmployeeItemId(Long id);
	void deleteEmployeeItem(int id);
}
