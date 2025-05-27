import React from "react";
import { Heading } from "../common/Heading";
import Typewriter from "typewriter-effect";
import { getCurrentUsername } from "../../services/api"; 

const username = getCurrentUsername();

export const Score = () => {

  const scoreValues = [
    {
      score1: "98%",
      score2: "99%",
      score3: "100%",
    },
  ];

  
  const categories = [
    { name: "Genre1", pointsPerBook: 0 },
    { name: "Genre2", pointsPerBook: 0 },
    { name: "Genre3", pointsPerBook: 0 },
    { name: "Genre4", pointsPerBook: 0 },
    { name: "Genre5", pointsPerBook: 0 },
    { name: "Genre6", pointsPerBook: 0 },
  ];

  
  const { score1, score2, score3 } = scoreValues[0];

  return (
    <>
      <section className="score">
        <div className="container2">
          <div className="right with-score" data-aos="fade-down-left">
            <div className="text">
              <Heading title="Score" />
            </div>
            <div className="score-typewriter">
              <Typewriter
                options={{
                  strings: [score1, score2, score3],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>

          <div className="table-container" data-aos="fade-down-right">
            <Heading title="Kategorien" />
            <table className="genre-table">
              <thead>
                <tr>
                  <th>Genre</th>
                  <th>Punktzahl</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <tr key={cat.name}>
                    <td>{cat.name}</td>
                    <td className="center">{cat.pointsPerBook}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Score;





