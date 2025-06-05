# Book Platform

# Frontend: Sophie Lazarjan
# Backend: Isabella Schwarz

## Project Structure


```text
WEB2/
├── frontend/                     # Frontend client
│   ├── node_modules/             # Installed packages (npm install)
│   ├── public/                   # Publicly accessible files
│   ├── src/                      # Frontend source code
│   └── package.json              # List of frontend dependencies and scripts
├── mybooks/                      # Java Spring Boot backend API
│   ├── .mvn/                     # Maven wrapper files
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/isabella/mybooks/
│   │   │   │   ├── controller/               # API routes (e.g., /books, /add_user)
│   │   │   │   ├── model/                    # Data models (e.g., Book, User)
│   │   │   │   ├── repository/               # Database access
│   │   │   │   │   ├── UserRepository.java   # Save and find users
│   │   │   │   │   ├── ReviewRepository.java # Save and get reviews by book title
│   │   │   │   │   └── ShelfEntryRepository.java # Save and get shelf entries by username
│   │   │   │   ├── service/                  # Business logic
│   │   │   │   │   ├── UserService.java      # Manage user creation and lookup
│   │   │   │   │   ├── ReviewService.java    # Add and list reviews for books
│   │   │   │   │   └── ShelfEntryService.java# Add and list books on user shelves
│   │   │   │   └── MybooksApplication.java   # Main application entry point
│   │   │   └── resources/
│   │   │       └── application.properties    # Backend configuration (e.g., database connection)
│   ├── pom.xml                               # Maven dependencies and project configuration
└── README.md                                 # Overview and instructions
```

## Git


1. Repository clonen

    ```bash
    git clone https://github.com/isabellaschwr/Web2.git
    ```

1. Passwort eingeben

1. Benutzername und E-Mail festlegen

    ```bash
    git config --global user.name "Dein Benutzername"
    git config --global user.email "deine.email@email.com"
    ```

1. In den neuen Ordner

    ```bash
    cd Web2
    ```

1. Dependencies installieren:

    ```bash
    npm install
    ```

1. Lokales Repo, um zu pushen

    ```bash
    git init .
    git add .
    git commit -m "Init"
    ```

1. Remote-Repository connecten

    ```bash
    git remote add origin https://github.com/isabellaschwr/Web2.git
    ```


## Pushing to master

1. Changes in den Commit adden

    ```bash
    git add .
    ```

1. Ins lokale Repo commiten

    ```bash
    git commit -m "Hier beschreiben, was du geändert hast."
    ```

1. Ins Github pushen

    ```bash
    git push origin master
    ```

    Oder

    ```bash
    git push --force origin master
    ```

Origin ist der für die Remote-Connection und master ist der Branch, zu dem gepusht werden soll.

---

## Running and Testing the Backend

### Starting the Backend

1. Open a terminal.
2. Navigate to `/mybooks/`. (cd mybooks)
3. Run the server:
   ```bash
   ./mvnw spring-boot:run
   ```

### If Port 8080 Is Blocked

1. Check which process is using port 8080:
   ```bash
   lsof -i :8080
   ```
2. Find the **PID** in the second column.
3. Kill the process:
   ```bash
   kill -9 <PID>
   ```
4. Restart the server:
   ```bash
   ./mvnw spring-boot:run
   ```

### Testing the API

Make sure the server is running. Open a new terminal for these commands.

#### Add a User
```bash
curl -X POST http://localhost:8080/users \
-H "Content-Type: application/json" \
-d '{"username": "isabella", "email": "isa@example.com"}'
```

#### List All Users
Visit in your browser:
```
http://localhost:8080/users
```

#### Post a Review
```bash
curl -X POST "http://localhost:8080/reviews?username=isabella" \
-H "Content-Type: application/json" \
-d '{"bookTitle": "1984", "rating": 5, "reviewText": "Loved it!"}'
```

#### List Reviews for a Book
Visit in your browser:
```
http://localhost:8080/reviews/1984
```

#### Add a Book to a User’s Shelf
```bash
curl -X POST "http://localhost:8080/shelves?username=isabella" \
-H "Content-Type: application/json" \
-d '{"bookTitle": "1984", "shelfType": "want_to_read"}'
```

#### List User’s Shelf
Visit in your browser:
```
http://localhost:8080/shelves/isabella
```


## Testing Frontend and Backend together
### Starting Backend

1. Open a terminal.
2. Navigate to `/mybooks/`. (cd mybooks)
3. Run the server:
   ```bash
   ./mvnw spring-boot:run
   ```
### Starting Frontend
1. Open a second terminal.
2. Navigate to `/frontend/` (cd frontend)
3. Run the server:
   ```bash
   npm start
   ```

