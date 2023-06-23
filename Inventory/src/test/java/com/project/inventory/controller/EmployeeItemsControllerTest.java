package com.project.inventory.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;

import com.project.inventory.entity.EmployeeItems;
import com.project.inventory.service.EmployeeItemsService;
import java.util.List;
import java.util.Map;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


class EmployeeItemsControllerTest {
  @Mock
  private EmployeeItemsService employeeItemsService;

  @InjectMocks
  private EmployeeItemsController employeeItemsController;
  
  @BeforeEach
  void setUp() {
    MockitoAnnotations.openMocks(this);
  }
  
  @Test
  void testAddEmployeeItems() {
    EmployeeItems employeeItems = new EmployeeItems();
    when(employeeItemsService.addEmployeeItem(any(EmployeeItems.class))).thenReturn(employeeItems);
    ResponseEntity<Object> response = employeeItemsController.addEmployeeItems(employeeItems);
    assertEquals(HttpStatus.OK, response.getStatusCode());
    @SuppressWarnings("unchecked")
    Map<String, Object> responseBody = (Map<String, Object>) response.getBody();
    assertEquals("Successfully retrieved data!", responseBody.get("message"));
    assertNotNull(responseBody.get("employeeItems"));
    assertEquals(employeeItems, responseBody.get("employeeItems"));
  }

  @Test
  void testGetEmployeeItems() {
    List<EmployeeItems> employeeItemsList = List.of(new EmployeeItems(), new EmployeeItems());
    when(employeeItemsService.getEmployeeItems()).thenReturn(employeeItemsList);
    ResponseEntity<Object> response = employeeItemsController.getEmployeeItems();
    assertEquals(HttpStatus.OK, response.getStatusCode());
    @SuppressWarnings("unchecked")
    Map<String, Object> responseBody = (Map<String, Object>) response.getBody();
    assertEquals("Successfully retrieved data!", responseBody.get("message"));
    assertNotNull(responseBody.get("employeeItems"));
    assertEquals(employeeItemsList, responseBody.get("employeeItems"));
  }

  @Test
  void testUpdateEmployeeItems() {
    Long userId = 1L;
    EmployeeItems updatedEmployeeItems = new EmployeeItems();
    when(employeeItemsService.updateEmployeeItem(eq(userId), any(EmployeeItems.class)))
          .thenReturn(updatedEmployeeItems);
    ResponseEntity<Object> response = employeeItemsController
                  .updateEmployeeItems(userId, updatedEmployeeItems);
    assertEquals(HttpStatus.OK, response.getStatusCode());
    @SuppressWarnings("unchecked")
    Map<String, Object> responseBody = (Map<String, Object>) response.getBody();
    assertEquals("Successfully retrieved data!", responseBody.get("message"));
    assertNotNull(responseBody.get("employeeItems"));
    assertEquals(updatedEmployeeItems, responseBody.get("employeeItems"));
  }
}
