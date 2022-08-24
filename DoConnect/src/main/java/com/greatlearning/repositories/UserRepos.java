package com.greatlearning.repositories;

import com.greatlearning.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepos extends JpaRepository<User,Integer> {
    Optional<User> findByUsername(String username);

    @Query(value = "select * from user where role=?1",nativeQuery = true)
    List<User> findAllByRole(String role);
    
     @Query(value="select email from user where user_id=?1",nativeQuery = true)
     String finduseemail(int user_id);
  
}
