// Defines the BookRepository interface to enable database operations
package com.isabella.mybooks.repository;

import com.isabella.mybooks.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    // methods like findAll(), findById(), save(), deleteById() are inherited from JpaRepository
}