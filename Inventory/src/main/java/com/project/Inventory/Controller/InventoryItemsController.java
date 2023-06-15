package com.project.inventory.controller;

import com.project.inventory.entity.InventoryItems;
import com.project.inventory.service.InventoryItemService;
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
 * Inventory items controller class.
*/

@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/inventory")
@RestController
public class InventoryItemsController {
  /**
    * Inventoryitemservice instance used for items.
  */
  private final InventoryItemService invItemService;
  /**
   * parameter constructor.
 */
  
  public InventoryItemsController(final InventoryItemService invItemService) {
    this.invItemService = invItemService;
  }
  /**
   * getting all items.
  */
  
  @PreAuthorize("hasRole('ADMIN')")
  @GetMapping("/InventoryItems")
  public List<InventoryItems> getInventoryItems() {
    return invItemService.getInventoryItems();
  }
  /**
   * getting item by id.
  */
  
  @PreAuthorize("hasRole('ADMIN')")
  @GetMapping("/InventoryItems/{itemId}")
  public Optional<InventoryItems> findByInventoryItemId(@PathVariable final int itemId) {
    return invItemService.findByInventoryItemId(itemId);
  }
  /**
   * adding items.
  */
  
  @PreAuthorize("hasRole('ADMIN')")
  @PostMapping("/InventoryItems")
  public InventoryItems addInventoryItem(@RequestBody final InventoryItems inventoryItems) {
    return invItemService.addInventoryItem(inventoryItems);
  }
  /**
   * updating items.
  */

  @PreAuthorize("hasRole('ADMIN')")
  @PutMapping("/InventoryItems/{itemId}")
  public InventoryItems updateInventoryItem(@PathVariable final int itemId,
                                            @RequestBody final InventoryItems inventoryItems) {
    return invItemService.updateInventoryItem(itemId, inventoryItems);
  }
  /**
   * deleting items.
  */
  
  @PreAuthorize("hasRole('ADMIN')")
  @DeleteMapping("/InventoryItems/{itemId}")
  public void deleteInventoryItem(@PathVariable final int itemId) {
    invItemService.deleteInventoryItem(itemId);
  }
  /**
   * getting unassigned items.
  */

  @PreAuthorize("hasRole('ADMIN')")
  @GetMapping("/InventoryItems/unassign")
  public List<InventoryItems> findByEmpIdIsNull() {
    return invItemService.findByEmpIdIsNull();
  }
  /**
   * getting assigned items.
  */

  @PreAuthorize("hasRole('ADMIN')")
  @GetMapping("/InventoryItems/assign")
  public List<InventoryItems> findByEmpIdIsNotNull() {
    return invItemService.findByEmpIdIsNotNull();
  }

}
