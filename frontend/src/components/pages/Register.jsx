import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Heading } from "../common/Heading";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleRegister = async () => {
    const user = { username, email };
    try {
      const res = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("username", data.username);
        alert("Registered and logged in!");
        history.push("/readlist"); // Weiterleitung nach Erfolg
      } else {
        alert("Registration failed"); 
      }
    } catch (err) {
      console.error("Error registering:", err);
      alert("An error occurred");
    }
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url('/images/readlist1.jpg')",
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
      <section className="register">
        <div className="container">
          <Heading title="Register" />
          <div className="form">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Register;