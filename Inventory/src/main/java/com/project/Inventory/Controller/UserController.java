package com.project.inventory.controller;

import com.project.inventory.entity.Users;
import com.project.inventory.repository.UserRepo;
import com.project.inventory.service.impl.UserServiceImpl;
import java.util.List;
import java.util.Optional;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Users Controller class.
*/

@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/users")
@RestController
public class UserController {
  /**
   * userserviceimpl instance for user services.
  */
  private final UserServiceImpl userServiceImpl;
  /**
   * userrepo instance for userdetails.
  */
  private final UserRepo userRepo;
  /**
   * parameter constructor.
  */
  
  public UserController(final UserServiceImpl userServiceImpl, final UserRepo userRepo) {
    this.userServiceImpl = userServiceImpl;
    this.userRepo = userRepo;
  }
  /**
   * adding users.
  */
  
  @PostMapping("/addusers")
  public Users addUser(@RequestBody final Users users) {
    return userServiceImpl.addUsers(users);
  }
  /**
   * getting employees.
  */
  
  @PreAuthorize("hasRole('ADMIN')")
  @GetMapping("/getemployees")
  public List<Users> getEmployees() {
    return userServiceImpl.getEmployees();
  }
  /**
   * updating users.
  */
  
  @PutMapping("/updateusers/{empId}")
  public Users updateUser(@PathVariable final Long empId, @RequestBody final Users users) {
    return userServiceImpl.updateUser(empId, users);
  }
  /**
   * deleting users.
  */
  
  @DeleteMapping("/deleteusers/{empId}")
  public void deleteUser(@PathVariable final Long empId) {
    userServiceImpl.deleteUser(empId);
  }
  /**
   * getting users by id.
  */
  
  @GetMapping("/getusers/{empId}")
  public Optional<Users> findUserById(@PathVariable final Long empId) {
    return userServiceImpl.findUserById(empId);
  }
  /**
   * getting users by email.
  */
  
  @GetMapping("/getusersbyemail/{email}")
  public Optional<Users> findUserByEmail(@PathVariable final String email) {
    return userRepo.findByEmail(email);
  }
}
