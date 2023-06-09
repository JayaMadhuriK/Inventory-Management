package com.project.Inventory.Service.Impl;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.project.Inventory.Entity.ERole;
import com.project.Inventory.Entity.InventoryItems;
import com.project.Inventory.Entity.Role;
import com.project.Inventory.Entity.Users;
import com.project.Inventory.Repository.EmployeeItemsRepo;
import com.project.Inventory.Repository.ItemRepo;
import com.project.Inventory.Repository.UserRepo;
import com.project.Inventory.Service.UserService;

@Service
public class UserServiceImpl implements UserService{

	private final UserRepo userRepo;
	private final EmployeeItemsRepo employeeItemsRepo;
	private final ItemRepo itemRepo;
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	public UserServiceImpl(UserRepo userRepo, ItemRepo itemRepo, EmployeeItemsRepo employeeItemsRepo){
		this.userRepo = userRepo;
		this.employeeItemsRepo = employeeItemsRepo;
		this.itemRepo = itemRepo;
	}
	@Override
	public Users addUsers(Users users) {
		String encryptedPassword = passwordEncoder.encode(users.getPassword());
	    users.setPassword(encryptedPassword);
		return userRepo.save(users);
	}

	@Override
	public Users updateUser(Long id, Users users) {
		Users existingUser = userRepo.findById(id).orElse(null);
	    if (existingUser != null) {
	        // Update the existing user with the new data
	        existingUser.setFirstName(users.getFirstName());
	        existingUser.setLastName(users.getLastName());
	        existingUser.setDateOfBirth(users.getDateOfBirth());
	        existingUser.setAge(users.getAge());
	        existingUser.setMobileNumber(users.getMobileNumber());
	        return userRepo.save(existingUser);
	    }
	    return null;
	}

	@Override
	public List<Users> getUsers() {
		return userRepo.findAll();
	}

	@Override
	public Optional<Users> findUserById(@PathVariable Long id) {
		return userRepo.findById(id);
	}

	@Override
	public void deleteUser(Long id) {
		userRepo.deleteById(id);
		 List<InventoryItems> inventoryItems = itemRepo.findByEmpId(id);
		    for (InventoryItems item : inventoryItems) {
		        item.setEmpId(null); 
		        itemRepo.save(item);
		    }
		    employeeItemsRepo.deleteByEmpId(id);
	}
	@Override
	public List<Users> getEmployees() {
		List<Users> allUsers = getUsers();
		List<Users> employees = new ArrayList<>();
		for(Users user: allUsers) {
			Set<Role> roles = user.getRoles();
			
			for(Role role:roles) {
				if(role.getName() == ERole.ROLE_EMPLOYEE) {
					employees.add(user);
					break;
				}
			}
		}
		return employees;
	}
	
}
