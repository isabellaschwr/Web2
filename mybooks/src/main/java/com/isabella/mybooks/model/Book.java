package com.isabella.mybooks.model;

// Book has basic book details

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Book {

    // Auto Generated ID for each book 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String author;

    private int publishYear;

    // URL of the book's cover image
    private String coverUrl;

    private String description;

    public Book() {}

    // create a book with all fields
    public Book(String title, String author, int publishYear, String coverUrl, String description) {
        this.title = title;
        this.author = author;
        this.publishYear = publishYear;
        this.coverUrl = coverUrl;
        this.description = description;
    }

    // Getter for id
    public Long getId() {
        return id;
    }

    // Getter for title
    public String getTitle() {
        return title;
    }

    // Getter for author
    public String getAuthor() {
        return author;
    }

    // Getter for publishYear
    public int getPublishYear() {
        return publishYear;
    }

    // Getter for coverUrl
    public String getCoverUrl() {
        return coverUrl;
    }

    // Getter for description
    public String getDescription() {
        return description;
    }

    // Setter for id
    public void setId(Long id) {
        this.id = id;
    }

    // Setter for title
    public void setTitle(String title) {
        this.title = title;
    }

    // Setter for author
    public void setAuthor(String author) {
        this.author = author;
    }

    // Setter for publishYear
    public void setPublishYear(int publishYear) {
        this.publishYear = publishYear;
    }

    // Setter for coverUrl
    public void setCoverUrl(String coverUrl) {
        this.coverUrl = coverUrl;
    }

    // Setter for description
    public void setDescription(String description) {
        this.description = description;
    }
}