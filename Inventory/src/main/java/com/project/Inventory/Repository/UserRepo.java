package com.project.Inventory.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.Inventory.Entity.Users;

@Repository
public interface UserRepo extends JpaRepository<Users,Long>{
	 Optional<Users> findByEmail(String email);
	 Boolean existsByEmail(String email);

}
