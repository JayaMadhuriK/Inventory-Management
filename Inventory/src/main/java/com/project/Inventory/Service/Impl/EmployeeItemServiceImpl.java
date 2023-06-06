package com.project.Inventory.Service.Impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.project.Inventory.Entity.EmployeeItems;
import com.project.Inventory.Entity.InventoryItems;
import com.project.Inventory.Repository.EmployeeItemsRepo;
import com.project.Inventory.Repository.ItemRepo;
import com.project.Inventory.Request.Reponse.EmployeeItemResponse;
import com.project.Inventory.Service.EmployeeItemsService;

@Service
public class EmployeeItemServiceImpl implements EmployeeItemsService{

	private final EmployeeItemsRepo employeeItemsRepo;
	private final ItemRepo itemRepo;
	public EmployeeItemServiceImpl(EmployeeItemsRepo employeeItemsRepo, ItemRepo itemRepo) {
		this.employeeItemsRepo = employeeItemsRepo;
		this.itemRepo = itemRepo;
	}
	@Override
	public EmployeeItems addEmployeeItem(EmployeeItems employeeItems) {
		for(int i=0;i<employeeItems.getAssignedItems().size();i++) {
			Optional<InventoryItems> inventoryItems =itemRepo.findById(employeeItems.getAssignedItems().get(i));
			inventoryItems.get().setEmpId(employeeItems.getEmpId());
			itemRepo.save(inventoryItems.get());
		}
		return employeeItemsRepo.save(employeeItems);
	}

	@Override
	public EmployeeItems updateEmployeeItem(Long id, EmployeeItems employeeItems) {
		Optional<EmployeeItems> employeeItemsDb = employeeItemsRepo.findById(id);
		List<Integer> unassignedItems =employeeItemsDb.get().getAssignedItems();
		unassignedItems.removeAll(employeeItems.getAssignedItems());
		for(int i=0;i<unassignedItems.size();i++) {
			Optional<InventoryItems> inventoryItems =itemRepo.findById(unassignedItems.get(i));
			inventoryItems.get().setEmpId(null);
			itemRepo.save(inventoryItems.get());
		}
		return employeeItemsRepo.save(employeeItems);
	}

	@Override
	public List<EmployeeItems> getEmployeeItems() {
		return employeeItemsRepo.findAll();
	}

	@Override
	public EmployeeItemResponse findByEmployeeItemId(Long id) {
		Optional<EmployeeItems> employeeItems = employeeItemsRepo.findById(id);
		System.out.println(employeeItems.get().getAssignedItems());
		EmployeeItemResponse employeeItemsResponse = new EmployeeItemResponse();
		List<InventoryItems> inventoryItemsList = new ArrayList<InventoryItems>();
		for(int i=0;i<employeeItems.get().getAssignedItems().size();i++){
			Optional<InventoryItems> inventoryItems =itemRepo.findById(employeeItems.get().getAssignedItems().get(i));
			System.out.println(inventoryItems.get());
			inventoryItemsList.add(inventoryItems.get());
		}
		employeeItemsResponse.setEmpId(id);
		employeeItemsResponse.setAssignedItems(inventoryItemsList);
		return employeeItemsResponse;
	}

	@Override
	public void deleteEmployeeItem(int id) {
		
		
	}

}
