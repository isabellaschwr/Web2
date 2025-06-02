import { useEffect, useState } from "react";
import { fetchBooks } from "../../services/api";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const Books = () => {
  const [books, setBooks] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  const filteredBooks = books.filter((book) => {
    const matchesLetter = book.title.toUpperCase().startsWith(selectedLetter);
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());

    if (searchTerm.trim() !== "") {
      return matchesSearch; 
    }
    return matchesLetter;
  });

  return (
    <>
      {/* Buchstaben-Leiste */}
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

      {/* Suchfeld */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Suchen..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Bücher-Anzeige */}
      <section className="book-section">
        <div className="book-grid">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div key={book.id} className="book-card">
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
                <button className="read-visual-button">✓</button>
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