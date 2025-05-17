// Handles  HTTP requests related to books
package com.isabella.mybooks.controller;

import com.isabella.mybooks.model.Book;
import com.isabella.mybooks.service.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "*")  
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    // Retrieve all books
    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    // Add a new book
    @PostMapping
    public Book addBook(@RequestBody Book book) {
        return bookService.addBook(book);
    }

    // Search and load books based on a search entry
    @GetMapping("/load-books")
    public List<Book> loadBooks(@RequestParam String query) {
        return bookService.loadBooksFromExternal(query);
    }
}