package com.project.Inventory.Controller;

import java.util.List;

import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.Inventory.Entity.Users;
import com.project.Inventory.Repository.UserRepo;
import com.project.Inventory.Service.Impl.UserServiceImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/users")
@RestController
public class UserController {
	private final UserServiceImpl userServiceImpl;
	private final UserRepo userRepo;
	public UserController(UserServiceImpl userServiceImpl, UserRepo userRepo) {
		this.userServiceImpl = userServiceImpl;
		this.userRepo = userRepo;
	}
	
	@PostMapping("/addusers")
	public Users addUser(@RequestBody Users users) {
		return userServiceImpl.addUsers(users);
	}
	@GetMapping("/getemployees")
	public List<Users> getEmployees() {
		return userServiceImpl.getEmployees();
	}
	@PutMapping("/updateusers/{id}")
	public Users updateUser(@PathVariable Long id,@RequestBody Users users) {
		return userServiceImpl.updateUser(id, users);
	}
	@DeleteMapping("/deleteusers/{id}")
	public void deleteUser(@PathVariable Long id) {
		userServiceImpl.deleteUser(id);
	}
	@GetMapping("/getusers/{id}")
	public Optional<Users> findUserById(@PathVariable Long id) {
		return userServiceImpl.findUserById(id);
	}
	@GetMapping("/getusersbyemail/{email}")
	public Optional<Users> findUserByEmail(@PathVariable String email) {
		return userRepo.findByEmail(email);
	}
	
}
