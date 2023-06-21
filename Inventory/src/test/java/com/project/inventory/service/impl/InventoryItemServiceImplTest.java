package com.project.inventory.service.impl;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.project.inventory.entity.InventoryItems;
import com.project.inventory.repository.ItemRepo;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@SpringBootTest
class InventoryItemServiceImplTest {
  @Autowired
  ItemRepo itemRepo;

  @Test
  void testUpdateInventoryItem() {
    InventoryItems item = itemRepo.findById(32).get();
    item.setItemName("glass");
    itemRepo.save(item);
    assertEquals("glass", itemRepo.findById(32).get().getItemName());
  }

  @Test
  void testAddInventoryItem() {
    InventoryItems item = new InventoryItems();
    item.setItemName("Kitkat");
    item.setCategory("Food Items");
    item.setDateOfPurchase("23-01-2023");
    item.setBillNumber(123456);
    itemRepo.save(item);
    InventoryItems savedItem = itemRepo.findById(item.getItemId()).orElse(null);
    assertAll("Item details",
        () -> assertNotNull(savedItem),
        () -> assertEquals("Kitkat", savedItem.getItemName()),
        () -> assertEquals("Food Items", savedItem.getCategory()),
        () -> assertEquals("23-01-2023", savedItem.getDateOfPurchase()),
        () -> assertEquals(123456, savedItem.getBillNumber())
    );
  }

  @Test
  void testGetInventoryItems() {
    List<InventoryItems> items = itemRepo.findAll();
    assertThat(items).size().isGreaterThan(0);
  }

  @Test
  void testFindByInventoryItemId() {
    Optional<InventoryItems> item = itemRepo.findById(32);
    assertTrue(item.isPresent());
    InventoryItems itemobj = item.get();
    assertEquals(32, itemobj.getItemId());
  }
  
  @AfterAll
  @Test
  public void testDeleteInventoryItem() {
    itemRepo.deleteById(34);
    assertThat(itemRepo.existsById(34)).isFalse();
  }

}
