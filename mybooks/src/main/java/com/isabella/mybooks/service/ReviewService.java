// logic for review management (retrieveing reviews for a book title, saving new reviews to database)
package com.isabella.mybooks.service;

import com.isabella.mybooks.model.Review;
import com.isabella.mybooks.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public List<Review> getReviewsForBook(String bookTitle) {
        return reviewRepository.findByBookTitle(bookTitle);
    }

    public Review addReview(Review review) {
        return reviewRepository.save(review);
    }
}