package com.isabella.mybooks;

import com.isabella.mybooks.service.BookService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.logging.Logger;


 // Preloads a selection of book genres from OpenLibrary API
 
@Component
public class DataLoader implements CommandLineRunner {

    private static final Logger LOGGER = Logger.getLogger(DataLoader.class.getName());
    private final BookService bookService;

    public DataLoader(BookService bookService) {
        this.bookService = bookService;
    }

    @Override
    public void run(String... args) {
        Map<String, String> genres = Map.ofEntries(
            Map.entry("Fantasy", "fantasy"),
            Map.entry("Science Fiction", "science_fiction"),
            Map.entry("Horror", "horror"),
            Map.entry("Mystery", "mystery"),
            Map.entry("Romance", "romance"),
            Map.entry("Historical Fiction", "historical_fiction"),
            Map.entry("Adventure", "adventure"),
            Map.entry("Classics", "classics"),
            Map.entry("Young Adult", "young_adult"),
            Map.entry("Biography", "biography"),
            Map.entry("Science", "science"),
            Map.entry("Medicine", "medicine"),
            Map.entry("Technology", "technology"),
            Map.entry("Computer Science", "computer_science"),
            Map.entry("Psychology", "psychology"),
            Map.entry("History", "history"),
            Map.entry("Philosophy", "philosophy"),
            Map.entry("Business", "business"),
            Map.entry("Education", "education"),
            Map.entry("Law", "law"),
            Map.entry("Religion", "religion")
        );

        LOGGER.info("Starting book preloading process...");

        for (Map.Entry<String, String> entry : genres.entrySet()) {
            try {
                LOGGER.info("Loading books for genre: " + entry.getKey());
                bookService.loadBooksFromExternal(entry.getValue());
            } catch (Exception e) {
                LOGGER.severe("Failed to load books for genre: " + entry.getKey() + ". Error: " + e.getMessage());
            }
        }

        LOGGER.info("Book preloading process completed.");
    }
}
