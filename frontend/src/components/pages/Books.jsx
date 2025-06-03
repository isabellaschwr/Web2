import React, { useEffect, useState } from "react";
import { fetchBooks, addToShelf, getCurrentUsername } from "../../services/api";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const Books = () => {
  const [books, setBooks] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightedBooks, setHighlightedBooks] = useState([]);

  useEffect(() => {
    fetchBooks()
      .then(setBooks)
      .catch((err) => {
        console.error("Fehler beim Laden der Bücher:", err);
      });
  }, []);

  const filteredBooks = books.filter((book) => {
    const matchesLetter = book.title.toUpperCase().startsWith(selectedLetter);
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());

    if (searchTerm.trim() !== "") {
      return matchesSearch;
    }
    return matchesLetter;
  });

  const handleAddToReadlist = async (bookTitle) => {
    const username = getCurrentUsername();
    if (!username) {
      alert("Bitte zuerst registrieren oder einloggen.");
      return;
    }

    try {
      await addToShelf(username, bookTitle, "read");
      alert(`„${bookTitle}“ wurde zur Readlist hinzugefügt.`);
    } catch (error) {
      console.error("Fehler beim Hinzufügen zur Readlist:", error);
      alert("Fehler beim Hinzufügen.");
    }
  };

  const handleHighlight = (bookId) => {
    setHighlightedBooks((prev) => [...prev, bookId]);
  };

  return (
    <>
      <div className="top-letter-bar">
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => setSelectedLetter(letter)}
            className={`letter-button ${letter === selectedLetter ? "active" : ""}`}
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Suchen..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <section className="book-section">
        <div className="book-grid">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div
                key={book.id}
                className={`book-card ${
                  highlightedBooks.includes(book.id) ? "highlighted" : ""
                }`}
              >
                <img src={book.coverUrl} alt={book.title} />
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <div className="button-row">
                  <button
                    onClick={() => handleAddToReadlist(book.title)}
                    className="add-readlist-button"
                  >
                    +
                  </button>
                  <button
                    className="read-visual-button"
                    onClick={() => handleHighlight(book.id)}
                  >
                    ✓
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>
              Keine Bücher gefunden
              {searchTerm && ` mit „${searchTerm}“`}
              {!searchTerm && ` mit Anfangsbuchstaben „${selectedLetter}“`}
              .
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Books;
