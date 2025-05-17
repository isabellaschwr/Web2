// provides data access for reviews and includes methods to find reviews by book title
package com.isabella.mybooks.repository;

import com.isabella.mybooks.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByBookTitle(String bookTitle); 
}
