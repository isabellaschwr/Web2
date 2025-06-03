package com.isabella.mybooks.controller;

// HTTP requests related to user shelves 

import com.isabella.mybooks.model.ShelfEntry;
import com.isabella.mybooks.service.ShelfEntryService;
import com.isabella.mybooks.service.UserService;
import com.isabella.mybooks.model.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/shelves")
@CrossOrigin(origins = "*")  
public class ShelfController {

    private final ShelfEntryService shelfEntryService;
    private final UserService userService;

    public ShelfController(ShelfEntryService shelfEntryService, UserService userService) {
        this.shelfEntryService = shelfEntryService;
        this.userService = userService;
    }

 
    // Find all shelf entries for the user
    @GetMapping("/{username}")
    public List<ShelfEntry> getShelfForUser(@PathVariable String username) {
        if (username == null || username.trim().isEmpty()) {
            throw new IllegalArgumentException("Login first");
        }
        return shelfEntryService.getShelfForUser(username);
    }

  
    // Add a book to a shelf for the user
    @PostMapping
    public ShelfEntry addShelfEntry(@RequestParam String username, @RequestBody ShelfEntry shelfEntry) {
        if (username == null || username.trim().isEmpty()) {
            throw new IllegalArgumentException("Username is required.");
        }

        User user = userService.findByUsername(username);
        if (user == null) {
            throw new IllegalArgumentException("User not found: " + username);
        }

        if (shelfEntry == null) {
            throw new IllegalArgumentException("Shelf entry data is required.");
        }

        shelfEntry.setUser(user);
        return shelfEntryService.addShelfEntry(shelfEntry);
    }
}
