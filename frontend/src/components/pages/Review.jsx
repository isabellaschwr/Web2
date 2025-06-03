import React, { useEffect, useState } from "react";
import { Heading } from "../common/Heading";
import { getCurrentUsername } from "../../services/api"; // lokal gespeicherter Benutzername

export const Review = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const username = getCurrentUsername();

  useEffect(() => {
    if (bookTitle.trim() !== "") {
      fetch(`http://localhost:8080/reviews/${encodeURIComponent(bookTitle)}`)
        .then((res) => res.json())
        .then((data) => setReviews(data))
        .catch((err) => console.error("Fehler beim Laden der Reviews:", err));
    }
  }, [bookTitle, refresh]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) {
      alert("Bitte zuerst einloggen oder Benutzername setzen.");
      return;
    }

    const review = {
      bookTitle,
      rating,
      reviewText,
    };

    try {
      const res = await fetch(`http://localhost:8080/reviews?username=${username}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });

      if (res.ok) {
        setReviewText("");
        setRating(5);
        setRefresh(!refresh);
      } else {
        alert("Fehler beim Absenden der Review.");
      }
    } catch (error) {
      console.error("Fehler beim Senden:", error);
    }
  };

  return (
    <section className="review">
      <div className="container">
        <Heading title=" Buch bewerten:" />

        <div className="search-bar2">
          <input
            type="text"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            placeholder="Buchtitel eingeben"
            className="border rounded p-2 w-full mb-4"
          />

          {bookTitle && (
            <div className="reviews">
              <h2 className="text-xl font-semibold mb-2"> Reviews zu: '{bookTitle}'</h2>
              {reviews.length === 0 ? (
                <p className="text-gray-500">Noch keine Bewertungen abgegeben.</p>
              ) : (
                <ul className="space-y-4">
                  {reviews.map((r) => (
                    <li key={r.id} className="border p-4 rounded shadow">
                      <div className="font-bold">{r.user?.username || "Unbekannt"}</div>
                      <div>⭐ {r.rating}/5</div>
                      <p>{r.reviewText}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        {bookTitle && (
          <form onSubmit={handleSubmit} className="border p-4 rounded shadow mt-6">
            <h3 className="text-lg font-semibold mb-2"> Review schreiben</h3>

            <label className="block mb-2">Bewertung (1–5 Sterne):</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="border p-2 w-full mb-4 rounded"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>

            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Ihre Meinung zum Buch..."
              className="border p-2 w-full rounded mb-4"
              rows={4}
              required
            />

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Bewertung absenden
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

