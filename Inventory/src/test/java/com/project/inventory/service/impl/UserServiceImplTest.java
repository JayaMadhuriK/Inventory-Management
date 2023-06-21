package com.project.inventory.service.impl;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.project.inventory.entity.Users;
import com.project.inventory.repository.UserRepo;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@SpringBootTest
class UserServiceImplTest {
  @Autowired
  UserRepo userRepo;

  @Test
  void testUpdateUser() {
    Users user = userRepo.findById(106L).get();
    user.setFirstName("madhu");
    userRepo.save(user);
    assertEquals("madhu", userRepo.findById(106L).get().getFirstName());
  }

  @Test
  void testGetUsers() {
    List<Users> allUsers = userRepo.findAll();
    assertThat(allUsers).size().isGreaterThan(0);
  }

  @Test
  void testFindUserById() {
    Optional<Users> user = userRepo.findById(106L);
    assertTrue(user.isPresent());
    Users userobj = user.get();
    assertEquals(106L, userobj.getUserId());
  }

  @Test
  void testFindUserByEmail() {
    Optional<Users> user = userRepo.findByEmail("sai@walmart.com");
    assertEquals("sai@walmart.com", user.get().getEmail());
  }
  
  @AfterAll
  @Test
  public void testDelete() {
    userRepo.deleteById(108L);
    assertThat(userRepo.existsById(108L)).isFalse();
  }

}
