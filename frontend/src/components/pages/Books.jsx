
import { useEffect, useState } from "react";
import { fetchBooks } from "../../services/api";
import { getCurrentUsername } from "../../services/api"; 

const username = getCurrentUsername();


export const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  return (
    <>

      <section className="bookSection" style={{ padding: "4rem", backgroundColor: "#f9f9f9" }}>
        <h2>Beliebte Bücher</h2>
        <div className="bookGrid" style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          {books.map((book) => (
            <div key={book.id} className="bookCard" style={{ width: "200px", border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", backgroundColor: "#fff" }}>
              <img src={book.coverUrl} alt={book.title} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      </section>

    </>
  );
};

export default Books;