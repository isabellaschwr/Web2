const API_BASE = '';

export async function fetchBooks() {
  const response = await fetch(`${API_BASE}/books`);
  return await response.json();
}




export async function addUser(user) {
  const response = await fetch(`${API_BASE}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return await response.json();
}

export async function saveToShelf(entry) {
  const response = await fetch(`${API_BASE}/shelf`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  });
  return await response.json();
}
export async function addToShelf(username, bookTitle, shelfType = "read") {
    const response = await fetch(`http://localhost:8080/shelves?username=${username}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookTitle, shelfType }),
    });
  
    if (!response.ok) {
      throw new Error("Failed to add book to shelf");
    }
  
    return await response.json();
  }
  export function getCurrentUsername() {
    const username = localStorage.getItem("username");
    if (!username) {
      console.warn("No user is currently logged in");
    }
    return username;
  }

  export async function fetchShelf(username) {
    const response = await fetch(`http://localhost:8080/shelves/${username}`);
    if (!response.ok) {
      throw new Error("Failed to fetch shelf");
    }
    return await response.json();
  }