// allows CRUD operations for Users and provides a method to find a user by username
package com.isabella.mybooks.repository;

import com.isabella.mybooks.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}