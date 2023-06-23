package com.project.inventory.controller;

import static org.junit.Assert.assertNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;

import com.project.inventory.entity.InventoryItems;
import com.project.inventory.service.InventoryItemService;
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


class InventoryItemsControllerTest {
  @Mock
  private InventoryItemService inventoryItemService;

  @InjectMocks
  private InventoryItemsController inventoryItemsController;
  
  @BeforeEach
  void setUp() {
    MockitoAnnotations.openMocks(this);
  }
  
  @Test
  void testGetInventoryItems() {
    List<InventoryItems> items = List.of(new InventoryItems(), new InventoryItems());
    when(inventoryItemService.getInventoryItems()).thenReturn(items);
    ResponseEntity<Object> response = inventoryItemsController.getInventoryItems();
    assertEquals(HttpStatus.OK, response.getStatusCode());
    @SuppressWarnings("unchecked")
    Map<String, Object> responseBody = (Map<String, Object>) response.getBody();
    assertEquals("Successfully retrieved data!", responseBody.get("message"));
    assertNotNull(responseBody.get("items"));
    assertEquals(items, responseBody.get("items"));
  }

  @Test
  void testFindByInventoryItemId() {
    int itemId = 1;
    Optional<InventoryItems> item = Optional.of(new InventoryItems());
    when(inventoryItemService.findByInventoryItemId(itemId)).thenReturn(item);
    ResponseEntity<Object> response = inventoryItemsController.findByInventoryItemId(itemId);
    assertEquals(HttpStatus.OK, response.getStatusCode());
    @SuppressWarnings("unchecked")
    Map<String, Object> responseBody = (Map<String, Object>) response.getBody();
    assertEquals("Successfully retrieved data!", responseBody.get("message"));
    assertNotNull(responseBody.get("items"));
    assertEquals(item, responseBody.get("items"));
  }

  @Test
  void testAddInventoryItem() {
    InventoryItems newItem = new InventoryItems();
    when(inventoryItemService.addInventoryItem(any(InventoryItems.class))).thenReturn(newItem);
    ResponseEntity<Object> response = inventoryItemsController.addInventoryItem(newItem);
    assertEquals(HttpStatus.OK, response.getStatusCode());
    @SuppressWarnings("unchecked")
    Map<String, Object> responseBody = (Map<String, Object>) response.getBody();
    assertEquals("Successfully Added data!", responseBody.get("message"));
    assertNotNull(responseBody.get("items"));
    assertEquals(newItem, responseBody.get("items"));
  }

  @Test
  void testUpdateInventoryItem() {
    int itemId = 1;
    InventoryItems updatedItem = new InventoryItems();
    when(inventoryItemService.updateInventoryItem(eq(itemId), any(InventoryItems.class)))
          .thenReturn(updatedItem);
    ResponseEntity<Object> response = inventoryItemsController.updateInventoryItem(itemId, 
                                          updatedItem);
    assertEquals(HttpStatus.OK, response.getStatusCode());
    @SuppressWarnings("unchecked")
    Map<String, Object> responseBody = (Map<String, Object>) response.getBody();
    assertEquals("Successfully Updated data!", responseBody.get("message"));
    assertNotNull(responseBody.get("items"));
    assertEquals(updatedItem, responseBody.get("items"));
  }

  @Test
  void testDeleteInventoryItem() {
    ResponseEntity<Object> response = inventoryItemsController.deleteInventoryItem(anyInt());
    assertEquals(HttpStatus.OK, response.getStatusCode());
    @SuppressWarnings("unchecked")
    Map<String, Object> responseBody = (Map<String, Object>) response.getBody();
    assertEquals("Successfully deleted data!", responseBody.get("message"));
    assertNull(responseBody.get("items"));
  }

  @Test
  void testFindByEmpIdIsNull() {
    List<InventoryItems> unassignedItems = List.of(new InventoryItems(), new InventoryItems());
    when(inventoryItemService.findByEmpIdIsNull()).thenReturn(unassignedItems);
    ResponseEntity<Object> response = inventoryItemsController.findByEmpIdIsNull();
    assertEquals(HttpStatus.OK, response.getStatusCode());
    @SuppressWarnings("unchecked")
    Map<String, Object> responseBody = (Map<String, Object>) response.getBody();
    assertEquals("Successfully retrieved data!", responseBody.get("message"));
    assertNotNull(responseBody.get("items"));
    assertEquals(unassignedItems, responseBody.get("items"));
  }

  @Test
  void testFindByEmpIdIsNotNull() {
    List<InventoryItems> assignedItems = List.of(new InventoryItems(), new InventoryItems());
    when(inventoryItemService.findByEmpIdIsNotNull()).thenReturn(assignedItems);
    ResponseEntity<Object> response = inventoryItemsController.findByEmpIdIsNotNull();
    assertEquals(HttpStatus.OK, response.getStatusCode());
    @SuppressWarnings("unchecked")
    Map<String, Object> responseBody = (Map<String, Object>) response.getBody();
    assertEquals("Successfully retrieved data!", responseBody.get("message"));
    assertNotNull(responseBody.get("items"));
    assertEquals(assignedItems, responseBody.get("items"));
  }
}
