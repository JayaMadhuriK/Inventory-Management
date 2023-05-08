package com.project.Inventory.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.Inventory.Entity.ERole;
import com.project.Inventory.Entity.Role;

@Repository
public interface RoleRepo extends JpaRepository<Role,Integer>{

	Optional<Role> findByName(ERole name);
}
