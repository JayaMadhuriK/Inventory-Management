package com.project.Inventory.Service;

import java.util.List;
import java.util.Optional;

import com.project.Inventory.Entity.Users;

public interface UserService {
	Users addUsers(Users users);
	Users updateUser(Long id,Users users);
	List<Users> getUsers();
	List<Users> getEmployees();
	Optional<Users> findUserById(Long id);
	void deleteUser(Long id);
}
