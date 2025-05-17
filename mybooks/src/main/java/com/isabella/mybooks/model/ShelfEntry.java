package com.isabella.mybooks.model;

import jakarta.persistence.*;

@Entity
public class ShelfEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String bookTitle;
    private String shelfType; // e.g., "read", "currently reading", "want to read"

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public ShelfEntry() {}

    // Constructor to create a shelf entry
    public ShelfEntry(String bookTitle, String shelfType, User user) {
        this.bookTitle = bookTitle;
        this.shelfType = shelfType;
        this.user = user;
    }
    public Long getId() {
        return id;
    }
    public String getBookTitle() {
        return bookTitle;
    }
    public String getShelfType() {
        return shelfType;
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
    public void setShelfType(String shelfType) {
        this.shelfType = shelfType;
    }
    public void setUser(User user) {
        this.user = user;
    }
    
}
