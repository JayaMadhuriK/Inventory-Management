package com.project.inventory.service.impl;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import com.project.inventory.entity.EmployeeItems;
import com.project.inventory.repository.EmployeeItemsRepo;
import com.project.inventory.repository.ItemRepo;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@SpringBootTest
class EmployeeItemServiceImplTest {
  @Autowired
  EmployeeItemsRepo empItemsRepo;
  @Autowired
  ItemRepo itemRepo;
  
  @BeforeAll
  @Test
  public void testAddEmployeeItem() {
    List<Integer> list = new ArrayList<>();
    list.add(34);
    EmployeeItems empitem = new EmployeeItems();
    empitem.setEmpId(106L);
    empitem.setAssignedItems(list);
    empItemsRepo.save(empitem);
    EmployeeItems savedItem = empItemsRepo.findById(empitem.getEmpId()).orElse(null);
    assertThat(savedItem).isNotNull();
    assertEquals(106L, savedItem.getEmpId());
    assertEquals(list, savedItem.getAssignedItems());
  }

  @Test
  void testUpdateEmployeeItem() {
    List<Integer> list = new ArrayList<>();
    list.add(34);
    list.add(35);
    EmployeeItems updatedItem = new EmployeeItems();
    updatedItem.setEmpId(106L);
    updatedItem.setAssignedItems(list);
    empItemsRepo.save(updatedItem);
    assertEquals(list, empItemsRepo.findById(106L).get().getAssignedItems());
  }

  @Test
  void testGetEmployeeItems() {
    List<EmployeeItems> empItems = empItemsRepo.findAll();
    assertThat(empItems).size().isGreaterThan(0);
  }

  @Test
  void testFindByEmployeeItemId() {
    Optional<EmployeeItems> res = empItemsRepo.findById(106L);
    assertEquals(res.get().getEmpId(), 106L);
  }
  
  @AfterAll
  @Test
  public void testDeleteEmployeeItem() {
    empItemsRepo.deleteById(106L);
    assertThat(empItemsRepo.existsById(106L)).isFalse();
  }
}
