package com.project.Inventory.Request.Reponse;

import java.util.List;

import com.project.Inventory.Entity.InventoryItems;

public class EmployeeItemResponse {
	private Long empId;
	private List<InventoryItems> assignedItems;
	public EmployeeItemResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public EmployeeItemResponse(Long empId, List<InventoryItems> assignedItems) {
		super();
		this.empId = empId;
		this.assignedItems = assignedItems;
	}

	public Long getEmpId() {
		return empId;
	}
	public void setEmpId(Long empId) {
		this.empId = empId;
	}
	public List<InventoryItems> getAssignedItems() {
		return assignedItems;
	}
	public void setAssignedItems(List<InventoryItems> assignedItems) {
		this.assignedItems = assignedItems;
	}
	
}
