import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { books } from "../data/datas";

export const Readlist = () => {
  const [readlist, setReadlist] = useState([]);

  const addToReadlist = (book) => {
    if (!readlist.find((item) => item.id === book.id)) {
      setReadlist([...readlist, book]);
    }
  };

  return (
    <>
      <section className="about"
      style={{
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}>
          

        <div className="readlist-box1" style={{ flex: 1 }}>
          <Heading title="Books" />
        </div>


        <div className="readlist-box2" style={{ flex: 1 }}>
          <Heading title="Meine Readlist" />
          {readlist.length === 0 ? (
            <p>Keine Bücher hinzugefügt...</p>
          ) : (
            <ul>
              {readlist.map((book) => (
                <li key={book.id}>
                  {book.title} von {book.author}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
};

export default Readlist;

