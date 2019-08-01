/*package com.example.demo;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService{
	@Autowired
    private UsersRepository usersRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    	//Object userDetails = SecurityContextHolder.getContext().getAuthentication().getDetails();
        Optional<User> optionalUsers = usersRepository.findByEmail(username);
        
        Users users = new Users();
        users.setId(1);
        users.setName("ramana");
        users.setActive(1);
        users.setEmail("ambati.raghu@karvy.com");
        users.setPassword("ramana");
        Role r =new Role();
        r.setRole("admin");
        r.setRoleId(1);
        Set<Role> roleSet = new HashSet<Role>();
        users.setRoles(roleSet);
        
        Optional<Users> optionalUsers = Optional.of(users);

        optionalUsers
                .orElseThrow(() -> new UsernameNotFoundException("Username not found"));
        return optionalUsers
                .map(CustomUserDetails::new).get();
    }
}
*/