package com.project.inventory.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.project.inventory.entity.Users;
import com.project.inventory.repository.UserRepo;
import com.project.inventory.service.impl.UserServiceImpl;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


class UserControllerTest {
  @Mock
  private UserServiceImpl userServiceImpl;

  @Mock
  private UserRepo userRepo;

  @InjectMocks
  private UserController userController;

  @BeforeEach
  void setUp() {
    MockitoAnnotations.openMocks(this);
  }

  @Test
  void testGetEmployees() {
    List<Users> usersList = new ArrayList<>();
    usersList.add(new Users());
    when(userServiceImpl.getEmployees()).thenReturn(usersList);
    ResponseEntity<Object> response = userController.getEmployees();
    assertEquals(HttpStatus.OK, response.getStatusCode());
    @SuppressWarnings("unchecked")
    Map<String, Object> responseBody = (Map<String, Object>) response.getBody();
    assertEquals("Successfully retrieved data!", responseBody.get("message"));
    assertEquals(usersList, responseBody.get("employees"));
    verify(userServiceImpl, times(1)).getEmployees();
  }

  @Test
  void testUpdateUser() {
    Users updatedUser = new Users();
    when(userServiceImpl.updateUser(anyLong(), any(Users.class))).thenReturn(updatedUser);
    ResponseEntity<Object> response = userController.updateUser(1L, new Users());
    assertEquals(HttpStatus.OK, response.getStatusCode());
    @SuppressWarnings("unchecked")
    Map<String, Object> responseBody = (Map<String, Object>) response.getBody();
    assertEquals("Successfully Updated data!",  responseBody.get("message"));
    assertEquals(updatedUser, responseBody.get("employees"));
    verify(userServiceImpl, times(1)).updateUser(anyLong(), any(Users.class));
  }

  @Test
  void testDeleteUser() {
    ResponseEntity<Object> response = userController.deleteUser(1L);
    assertEquals(HttpStatus.OK, response.getStatusCode());
    @SuppressWarnings("unchecked")
    Map<String, Object> responseBody = (Map<String, Object>) response.getBody();
    assertEquals("Deleted!", responseBody.get("message"));
    assertEquals(null, responseBody.get("employees"));
    verify(userServiceImpl, times(1)).deleteUser(anyLong());
  }
  
  @Test
  void testFindUserById() {
    Users user = new Users();
    Optional<Users> optionalUser = Optional.of(user);
    when(userServiceImpl.findUserById(anyLong())).thenReturn(optionalUser);
    ResponseEntity<Object> response = userController.findUserById(1L);
    assertEquals(HttpStatus.OK, response.getStatusCode());
    @SuppressWarnings("unchecked")
    Map<String, Object> responseBody = (Map<String, Object>) response.getBody();
    assertEquals("Successfully retrieved data!!", responseBody.get("message"));
    assertEquals(optionalUser, responseBody.get("employees"));
    verify(userServiceImpl, times(1)).findUserById(anyLong());
  }
  
  
  @Test
  void testFindUserByEmail() {
    Users user = new Users();
    Optional<Users> optionalUser = Optional.of(user);
    when(userRepo.findByEmail(anyString())).thenReturn(optionalUser);
    ResponseEntity<Object> response = userController.findUserByEmail("test@example.com");
    assertEquals(HttpStatus.OK, response.getStatusCode());
    @SuppressWarnings("unchecked")
    Map<String, Object> responseBody = (Map<String, Object>) response.getBody();
    assertEquals("Successfully retrieved data!!", responseBody.get("message"));
    assertEquals(optionalUser, responseBody.get("employees"));
    verify(userRepo, times(1)).findByEmail(anyString());
  }
  
}
