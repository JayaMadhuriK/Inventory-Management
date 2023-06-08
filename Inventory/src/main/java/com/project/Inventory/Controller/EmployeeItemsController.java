package com.project.Inventory.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.Inventory.Entity.EmployeeItems;
import com.project.Inventory.Request.Reponse.EmployeeItemResponse;
import com.project.Inventory.Service.EmployeeItemsService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/employeeitems")
@RestController
public class EmployeeItemsController {
	private final EmployeeItemsService employeeItemsService;
	public EmployeeItemsController(EmployeeItemsService employeeItemsService) {
		this.employeeItemsService = employeeItemsService;
	}
	@PostMapping("/assignitems")
	public EmployeeItems addEmployeeItems(@RequestBody EmployeeItems employeeItems)
	{
		return employeeItemsService.addEmployeeItem(employeeItems);
	}
	@GetMapping("/assignitems")
	public List<EmployeeItems> getEmployeeItems(){
		return employeeItemsService.getEmployeeItems();
	}
	@GetMapping("/assignitems/{id}")
	public EmployeeItemResponse findByEmployeeItemId(@PathVariable Long id){
		return employeeItemsService.findByEmployeeItemId(id);
	}
	@PutMapping("/unassignitems/{id}")
	public EmployeeItems updateEmployeeItems(@PathVariable Long id,@RequestBody EmployeeItems employeeItems)
	{
		return employeeItemsService.updateEmployeeItem(id, employeeItems);
	} 
	@DeleteMapping("/unassignitems/{id}")
	public void deleteEmployeeItem(@PathVariable Long id) {
		employeeItemsService.deleteEmployeeItem(id);
	}
}
