import React from "react";
import { About } from "../pages/About";
import { Readlist } from "../pages/Readlist";
import { Register } from "../pages/Register";
import Typewriter from "typewriter-effect"; 
import { getCurrentUsername } from "../../services/api"; 

const username = getCurrentUsername();

const home = [
  {
    text: "Willkommen bei",
    name: "Literatur-Archiv",
    post: "Readinglists",
    design: "Reviews",
    desc: "Entdecke Klassiker wieder neu.",
  },
];

export const Home = () => {

  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: "url('/images/home.PNG')",
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
        }}
      >
        {home.map((val, i) => (
          <div key={i} className="heroContent">
            <h3 className="fontSize" data-aos="fade-right">
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [val.name, val.post, val.design],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos="fade-left">{val.desc}</p>
            <button onClick={() => history.push("/Readlist")}>go to readlist</button>
          </div>
        ))}
      </section>

      <About />
      <Readlist />
      <Register />
      
    </>
  );
};

export default Home;
