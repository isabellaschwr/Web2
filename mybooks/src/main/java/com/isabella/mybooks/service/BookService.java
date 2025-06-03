// book management logic (listing books, adding new books, loading books from OpenLibrary API)
package com.isabella.mybooks.service;

import com.isabella.mybooks.model.Book;
import com.isabella.mybooks.repository.BookRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.List;
import java.util.ArrayList;

@Service
public class BookService {
	private final BookRepository bookRepository;

	public BookService(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
	}
	// list all books
	public List<Book> getAllBooks() {
		return bookRepository.findAll();
	}
	// new book to database
	public Book addBook(Book book) {
		return bookRepository.save(book);
	}


public List<Book> loadBooksFromExternal(String query) {
    String url = "https://openlibrary.org/search.json?q=" + query;
    RestTemplate restTemplate = new RestTemplate();
    String response = restTemplate.getForObject(url, String.class);

    JSONObject jsonResponse = new JSONObject(response);
    JSONArray docs = jsonResponse.getJSONArray("docs");

    List<Book> loadedBooks = new ArrayList<>();

    for (int i = 0; i < Math.min(50, docs.length()); i++) {  // Limit to first 10
        JSONObject doc = docs.getJSONObject(i);
        String title = doc.optString("title");
        JSONArray authorsArray = doc.optJSONArray("author_name");
        String author = authorsArray != null && authorsArray.length() > 0 ? authorsArray.getString(0) : "Unknown";
        int publishYear = doc.optJSONArray("publish_year") != null && doc.optJSONArray("publish_year").length() > 0
                ? doc.optJSONArray("publish_year").getInt(0)
                : 0;
        String coverUrl = doc.has("cover_i") ? "https://covers.openlibrary.org/b/id/" + doc.getInt("cover_i") + "-M.jpg" : null;

        if (coverUrl == null) continue;
        
        Book book = new Book(title, author, publishYear, coverUrl, null, coverUrl);
        bookRepository.save(book);
        loadedBooks.add(book);
    }

    return loadedBooks;
}}