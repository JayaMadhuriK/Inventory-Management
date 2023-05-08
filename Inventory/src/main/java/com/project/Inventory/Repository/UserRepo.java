package com.project.Inventory.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.Inventory.Entity.Users;

@Repository
public interface UserRepo extends JpaRepository<Users,String>{
	 Optional<Users> findByEmail(String email_id);
	 Boolean existsByEmail(String email_id);

}
