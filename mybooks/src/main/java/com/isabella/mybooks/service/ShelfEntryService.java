// logic for managing user shelves (fethcing all shelf entries, adding new shelf entries)
package com.isabella.mybooks.service;

import com.isabella.mybooks.model.ShelfEntry;
import com.isabella.mybooks.repository.ShelfEntryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShelfEntryService {

    private final ShelfEntryRepository shelfEntryRepository;

    public ShelfEntryService(ShelfEntryRepository shelfEntryRepository) {
        this.shelfEntryRepository = shelfEntryRepository;
    }

    public List<ShelfEntry> getShelfForUser(String username) {
        return shelfEntryRepository.findByUserUsername(username);
    }

    public ShelfEntry addShelfEntry(ShelfEntry shelfEntry) {
        return shelfEntryRepository.save(shelfEntry);
    }
}