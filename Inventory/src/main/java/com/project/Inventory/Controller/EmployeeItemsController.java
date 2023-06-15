package com.project.inventory.controller;

import com.project.inventory.entity.EmployeeItems;
import com.project.inventory.request.reponse.EmployeeItemResponse;
import com.project.inventory.service.EmployeeItemsService;
import java.util.List;
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
 * Employee Controller class.
*/

@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/employeeitems")
@RestController
public class EmployeeItemsController {
  /**
     * Employeeitemservice instance used for employee and assigned items.
  */
  private final EmployeeItemsService empItemsService;
  /**
   * parameter constructor.
*/
  
  public EmployeeItemsController(final EmployeeItemsService empItemsService) {
    this.empItemsService = empItemsService;
  }
  /**
   * Assigning items to employees.
  */
  
  @PreAuthorize("hasRole('ADMIN')")
  @PostMapping("/assignitems")
  public EmployeeItems addEmployeeItems(@RequestBody final EmployeeItems employeeItems) {
    return empItemsService.addEmployeeItem(employeeItems);
  }
  /**
   * get assigned items of employee.
  */ 
  
  @PreAuthorize("hasRole('ADMIN')")
  @GetMapping("/assignitems")
  public List<EmployeeItems> getEmployeeItems() {
    return empItemsService.getEmployeeItems();
  }
  /**
   * get assigned items by Employee id.
  */
  
  @PreAuthorize("hasRole('ADMIN') or hasRole('EMPLOYEE')")
  @GetMapping("/assignitems/{itemId}")
  public EmployeeItemResponse findByEmployeeItemId(@PathVariable final Long itemId) {
    return empItemsService.findByEmployeeItemId(itemId);
  }
  /**
   * updating assigned items to employees.
  */
  
  @PreAuthorize("hasRole('ADMIN')")
  @PutMapping("/unassignitems/{id}")
  public EmployeeItems updateEmployeeItems(@PathVariable final Long itemId, 
                                           @RequestBody final EmployeeItems employeeItems) {
    return empItemsService.updateEmployeeItem(itemId, employeeItems);
  } 
  /**
   * deleting assigned items to employees.
  */
  
  @PreAuthorize("hasRole('ADMIN')")
  @DeleteMapping("/unassignitems/{empId}")
  public void deleteEmployeeItem(@PathVariable final Long empId) {
    empItemsService.deleteEmployeeItem(empId);
  }
}
