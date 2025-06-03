import React, { useEffect, useState } from "react";
import { Heading } from "../common/Heading";
import { fetchShelf, getCurrentUsername } from "../../services/api";

export const Readlist = () => {
  const [readlist, setReadlist] = useState([]);
  const username = getCurrentUsername();

  useEffect(() => {
    if (!username) {
      console.warn("No username found. Please log in.");
      return;
    }

    fetchShelf(username)
      .then(setReadlist)
      .catch((err) => console.error("Failed to load shelf:", err));
  }, [username]);

  return (
    <section
      className="about"
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        color: "white",
        padding: "2rem",
      }}
    >
      <div className="readlist-box1">
        <Heading title={` ${username}'s Readlist`} />

        {readlist.length === 0 ? (
          <p>Keine Bücher hinzugefügt...</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {readlist.map((entry) => (
              <li
                key={entry.id}
                style={{
                  backgroundColor: entry.shelfType === "finished" ? "#e6f9e6" : "transparent",
                  border: entry.shelfType === "finished" ? "2px solid #4caf50" : "1px solid gray",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  marginBottom: "0.5rem",
                  color: "white",
                }}
              >
                <strong>{entry.bookTitle}</strong> —{" "}
                <i style={{ color: "#ccc" }}>{entry.shelfType}</i>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Readlist;

