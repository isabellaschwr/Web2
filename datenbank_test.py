import requests
import time
import json
import random
import re

GENRES = {
    # Fiction
    "Fantasy": "fantasy",
    "Science Fiction": "science_fiction",
    "Horror": "horror",
    "Mystery": "mystery",
    "Romance": "romance",
    "Historical Fiction": "historical_fiction",
    "Adventure": "adventure",
    "Classics": "classics",
    "Young Adult": "young_adult",

    # Non-Fiction
    "Biography": "biography",
    "Science": "science",
    "Medicine": "medicine",
    "Technology": "technology",
    "Computer Science": "computer_science",
    "Psychology": "psychology",
    "History": "history",
    "Philosophy": "philosophy",
    "Business": "business",
    "Education": "education",
    "Law": "law",
    "Religion": "religion"
}

def title_is_english(title):
    return bool(re.match(r'^[\x00-\x7F\s\.,!?\'":;()\[\]\-]+$', title))

def fetch_books_for_genre(display_genre, subject, target_count=100):
    print(f"Fetching books for genre: {display_genre}")
    url = f"https://openlibrary.org/search.json?subject={subject}&limit=500"
    res = requests.get(url)

    if res.status_code != 200:
        print(f"Failed to fetch for genre {display_genre}")
        return []

    data = res.json()
    books = data.get("docs", [])
    if not books:
        return []

    # Filter: Published after 1900 and valid English titles
    filtered_books = []
    seen_titles_authors = set()

    for book in books:
        title = book.get("title", "").strip()
        if not title or not title_is_english(title):
            continue
        if "language" not in book or "eng" not in book["language"]:
            continue

        publish_year = book.get("first_publish_year")
        if not publish_year or publish_year <= 1900:
            continue

        authors = book.get("author_name", [])
        author = authors[0] if authors else "Unknown"
        unique_key = f"{title.lower()}|{author.lower()}"
        if unique_key in seen_titles_authors:
            continue
        seen_titles_authors.add(unique_key)

        cover_id = book.get("cover_i")
        cover_url = f"https://covers.openlibrary.org/b/id/{cover_id}-M.jpg" if cover_id else None

        filtered_books.append({
            "title": title,
            "author": author,
            "genre": display_genre,
            "publish_year": publish_year,
            "cover_url": cover_url
        })

    # Favor newer books by shuffling and sorting descending by year
    filtered_books.sort(key=lambda b: b["publish_year"], reverse=True)
    random.shuffle(filtered_books)  # Randomize but keep newer first

    # Limit to target_count
    selected_books = filtered_books[:target_count]

    time.sleep(1) 
    return selected_books

def save_books(books, filename="book_data.json"):
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(books, f, ensure_ascii=False, indent=2)
    print(f"Saved {len(books)} books to {filename}")

if __name__ == "__main__":
    all_books_dict = {}

    for genre_name, subject_query in GENRES.items():
        books = fetch_books_for_genre(genre_name, subject_query, target_count=100)
        for book in books:
            unique_key = f"{book['title'].lower()}|{book['author'].lower()}"
            if unique_key not in all_books_dict:
                all_books_dict[unique_key] = book

    all_books = list(all_books_dict.values())
    save_books(all_books)
