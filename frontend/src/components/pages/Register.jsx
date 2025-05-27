import { getCurrentUsername } from "../../services/api"; 

const username = getCurrentUsername();



// Rest hier oben noch - das ist nur für Buch zu Benutzer Datenspeicherung

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
      } else {
        alert("Registration failed");
      }
    } catch (err) {
      console.error("Error registering:", err);
    }
  };