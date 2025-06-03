import React, { useEffect, useState } from "react";
import { Heading } from "../common/Heading";
import { fetchShelf, getCurrentUsername } from "../../services/api";
import Books from "./Books";


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
        height: "100vh",
        color: "white",
        padding: "2rem",
      }}
    >
      <div className="readlist-box1">
        <Heading title={`${username}'s Readlist`} />
        {readlist.length === 0 ? (
          <p>Keine Bücher hinzugefügt...</p>
        ) : (
          <ul>
            {readlist.map((entry) => (
              <li key={entry.id}>
                {entry.bookTitle} — <i>{entry.shelfType}</i>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Readlist;
