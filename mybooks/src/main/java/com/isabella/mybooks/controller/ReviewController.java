// HTTP requests related to book reviews
package com.isabella.mybooks.controller;

import com.isabella.mybooks.model.Review;
import com.isabella.mybooks.service.ReviewService;
import com.isabella.mybooks.service.UserService;
import com.isabella.mybooks.model.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
@CrossOrigin(origins = "*")
public class ReviewController {

    private final ReviewService reviewService;
    private final UserService userService;

    public ReviewController(ReviewService reviewService, UserService userService) {
        this.reviewService = reviewService;
        this.userService = userService;
    }

    // Get all reviews for a given book by its title
    @GetMapping("/{bookTitle}")
    public List<Review> getReviewsForBook(@PathVariable String bookTitle) {
        return reviewService.getReviewsForBook(bookTitle);
    }

    // Add a review for a book linked to the user
    @PostMapping
    public Review addReview(@RequestParam String username, @RequestBody Review review) {
        User user = userService.findByUsername(username);
        review.setUser(user);
        return reviewService.addReview(review);
    }
}