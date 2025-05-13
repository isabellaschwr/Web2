import requests
import time
import json
import re

# GENRES: You can expand this list as needed
GENRES = {
    "Fantasy": "fantasy",
    "Science Fiction": "science_fiction",
    "Horror": "horror",
    "Mystery": "mystery",
    "Romance": "romance",
    "Historical Fiction": "historical_fiction",
    "Biography": "biography",
    "Adventure": "adventure"
}

def title_is_english(title):
    # Returns True if title consists of mostly ASCII characters
    return bool(re.match(r'^[\x00-\x7F\s\.,!?\'":;()\[\]\-]+$', title))

def fetch_books_for_genre(display_genre, subject, count=100):
    print(f"📚 Fetching {count} books for genre: {display_genre}")
    results = []
    url = f"https://openlibrary.org/search.json?subject={subject}&limit={count}"
    res = requests.get(url)
    if res.status_code != 200:
        print(f"Failed to fetch for genre {display_genre}")
        return results

    data = res.json()
    for book in data.get("docs", []):
        title = book.get("title", "")
        
        # Filter: only English-looking titles
        if not title or not title_is_english(title):
            continue
        
        # Filter: only books available in English
        if "language" not in book or "eng" not in book["language"]:
            continue

        authors = book.get("author_name", [])
        author = authors[0] if authors else "Unknown"
        cover_id = book.get("cover_i")
        cover_url = f"https://covers.openlibrary.org/b/id/{cover_id}-M.jpg" if cover_id else None

        results.append({
            "title": title,
            "author": author,
            "genre": display_genre,
            "cover_url": cover_url
        })

    time.sleep(1)  # Be nice to the API
    return results

def save_books(books, filename="book_data.json"):
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(books, f, ensure_ascii=False, indent=2)
    print(f"\nSaved {len(books)} books to {filename}")

# Run the whole thing
if __name__ == "__main__":
    all_books = []
    for genre_name, subject_query in GENRES.items():
        books = fetch_books_for_genre(genre_name, subject_query, count=100)
        all_books.extend(books)

    save_books(all_books)
