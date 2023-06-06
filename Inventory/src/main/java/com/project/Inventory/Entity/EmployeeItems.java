package com.project.Inventory.Entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class EmployeeItems {
	@Column(nullable=false)
	@Id
	private Long empId;
	@Column(nullable=false)
	private List<Integer> assignedItems;
	public EmployeeItems() {
		super();
		// TODO Auto-generated constructor stub
	}
	public EmployeeItems(Long empId, List<Integer> assignedItems) {
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
	public List<Integer> getAssignedItems() {
		return assignedItems;
	}
	public void setAssignedItems(List<Integer> assignedItems) {
		this.assignedItems = assignedItems;
	}
	
	
}
