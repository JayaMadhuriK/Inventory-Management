package com.project.Inventory.Entity;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToOne;

@Entity
public class InventoryItems {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int itemId;
	@Column(nullable=false, length = 128)
	private String itemName;
	@Column(nullable=false, length = 128)
	private String category;
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable=false, length = 30)
	private int billNumber;
	@Column(nullable=false)
	@JsonFormat(pattern="DD-MM-YYYY")
	private Date dateOfPurchase;
	@Column(nullable=false)
	private int warranty;
	@Column(nullable=false)
	private String expireDate;
	@OneToOne(fetch = FetchType.LAZY)
	 @JoinTable(  name = "employee_items", 
	        joinColumns = @JoinColumn(name = "item_id"),
	        inverseJoinColumns = @JoinColumn(name = "user_id"))
	 private Users assignedEmployee;
	
	public InventoryItems() {
		super();
		// TODO Auto-generated constructor stub
	}
	public InventoryItems(String itemName, String category, int billNumber, Date dateOfPurchase, int warranty,
			String expireDate) {
		super();
		this.itemName = itemName;
		this.category = category;
		this.billNumber = billNumber;
		this.dateOfPurchase = dateOfPurchase;
		this.warranty = warranty;
		this.expireDate = expireDate;
	}
	public int getItemId() {
		return itemId;
	}
	public void setItemId(int itemId) {
		this.itemId = itemId;
	}
	public String getItemName() {
		return itemName;
	}
	public void setItemName(String itemName) {
		this.itemName = itemName;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public int getBillNumber() {
		return billNumber;
	}
	public void setBillNumber(int billNumber) {
		this.billNumber = billNumber;
	}
	public Date getDateOfPurchase() {
		return dateOfPurchase;
	}
	public void setDateOfPurchase(Date dateOfPurchase) {
		this.dateOfPurchase = dateOfPurchase;
	}
	public int getWarranty() {
		return warranty;
	}
	public void setWarranty(int warranty) {
		this.warranty = warranty;
	}
	public String getExpireDate() {
		return expireDate;
	}
	public void setExpireDate(String expireDate) {
		this.expireDate = expireDate;
	}
	public Users getAssignedEmployee() {
		return assignedEmployee;
	}
	public void setAssignedEmployee(Users assignedEmployee) {
		this.assignedEmployee = assignedEmployee;
	}
	
}