package com.project.Inventory.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class AssignedItems {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "userId")
	private Users user;
	
	@ManyToOne
	@JoinColumn(name = "itemId")
	private InventoryItems item;

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public InventoryItems getItem() {
		return item;
	}

	public void setItem(InventoryItems item) {
		this.item = item;
	}

	public AssignedItems(Users user, InventoryItems item) {
		super();
		this.user = user;
		this.item = item;
	}

	public AssignedItems() {
		super();
		// TODO Auto-generated constructor stub
	}
	

}
