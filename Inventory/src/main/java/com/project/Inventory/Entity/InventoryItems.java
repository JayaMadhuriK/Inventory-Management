package com.project.Inventory.Entity;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

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
	private String dateOfPurchase;
	@Column(nullable=false)
	private int warranty;
	@Column(nullable=false)
	private String expireDate;
	@Column(nullable=true)
	private Long empId;
	public InventoryItems() {
		super();
		// TODO Auto-generated constructor stub
	}
	public InventoryItems(String itemName, String category, int billNumber, String dateOfPurchase, int warranty,
			String expireDate, Long empId) {
		super();
		this.itemName = itemName;
		this.category = category;
		this.billNumber = billNumber;
		this.dateOfPurchase = dateOfPurchase;
		this.warranty = warranty;
		this.expireDate = expireDate;
		this.empId = empId;
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
	public String getDateOfPurchase() {
		return dateOfPurchase;
	}
	public void setDateOfPurchase(String dateOfPurchase) {
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
	public Long getEmpId() {
		return empId;
	}
	public void setEmpId(Long empId) {
		this.empId = empId;
	}
	
}