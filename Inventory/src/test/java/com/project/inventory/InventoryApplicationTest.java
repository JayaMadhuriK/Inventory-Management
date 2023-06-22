package com.project.inventory;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

import org.junit.jupiter.api.Test;

class InventoryApplicationTest {

  @Test
  public void testMain() {
    assertDoesNotThrow(() -> InventoryApplication.main(new String[]{}));
  }

}
