package com.isabella.mybooks.model;

import jakarta.persistence.*;


@Entity
public class Review {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String bookTitle;
    private int rating;
    private String reviewText;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Review() {}
    // constructor to create review 
    public Review(String bookTitle, int rating, String reviewText, User user) {
        this.bookTitle = bookTitle;
        this.rating = rating;
        this.reviewText = reviewText;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public String getBookTitle() {
        return bookTitle;
    }
    public int getRating() {
        return rating;
    }
    public String getReviewText() {
        return reviewText;
    }
    public User getUser() {
        return user;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public void setBookTitle(String bookTitle) {
        this.bookTitle = bookTitle;
    }
    public void setRating(int rating) {
        this.rating = rating;
    }
    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }
    public void setUser(User user) {
        this.user = user;
    }
}
