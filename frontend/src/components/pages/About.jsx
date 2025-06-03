import React from "react";
import { useHistory } from "react-router-dom";
import { Heading } from "../common/Heading";
import { about } from "../data/datas";
import { getCurrentUsername } from "../../services/api"; 

const username = getCurrentUsername();

export const About = () => {
  const history = useHistory();

  return (
    <section className="about">
      <div className="container flex">
        {about.map((val, index) => (
          <React.Fragment key={index}>
            <div className="left" data-aos="fade-down-right">
              <img src={val.cover} alt="" />
            </div>
            <div className="right" data-aos="fade-down-left">
              <Heading title="About the Website" />
              <p>{val.desc}</p>
              <p>{val.desc1}</p>
              <p>{val.desc2}</p>
              <button onClick={() => history.push("/readlist")}>Readlist</button>
              <button className="primaryBtn" onClick={() => history.push("/books")}>
                Books
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
