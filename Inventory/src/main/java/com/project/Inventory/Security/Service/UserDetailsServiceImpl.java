package com.project.Inventory.Security.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.project.Inventory.Entity.Users;
import com.project.Inventory.Repository.UserRepo;

import jakarta.transaction.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{
	
	@Autowired
	  UserRepo userRepository;

	  @Override
	  @Transactional
	  public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
	    Users user = userRepository.findByEmail(email)
	        .orElseThrow(() -> new UsernameNotFoundException("User Not Found with email_id: " + email));

	    return UserDetailsImpl.build(user);
	  }
}
