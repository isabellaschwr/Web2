// enables database operations for ShelfEntry and provides a method to find all shelf entries for a user
package com.isabella.mybooks.repository;

import com.isabella.mybooks.model.ShelfEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ShelfEntryRepository extends JpaRepository<ShelfEntry, Long> {
    List<ShelfEntry> findByUserUsername (String username); 
}