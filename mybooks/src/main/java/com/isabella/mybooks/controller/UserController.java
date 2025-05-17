package com.isabella.mybooks.controller;

import com.isabella.mybooks.model.User;
import com.isabella.mybooks.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*") 
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // List of all registered user
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    // Find a user by username
    @PostMapping
    public ResponseEntity<?> addUser(@RequestBody User user) {
        if (user == null || user.getUsername() == null || user.getUsername().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Username is required.");
        }

        User createdUser = userService.addUser(user);
        return ResponseEntity.ok(createdUser);
    }
}
