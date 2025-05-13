# Web2

Bücher Datenbank
https://openlibrary.org/search.json?subject=sciencefiction&limit=100

## Setup

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

1. Server starten:

    ```bash
    node server.js
    ```

1. `http://localhost:3000` im Browser

## Projektstruktur

```text
webapp/
├── node_modules/        # Hier werden alle installierten Pakete gespeichert (automatisch durch npm install)
├── src/
│   ├── middleware/      # Programm-Module die vor jeder Anfrage ausgeführt werden (z.B. Login-Prüfung)
│   ├── public/          # Öffentliche Dateien, die direkt im Browser verfügbar sind
│   │   ├── css/         # Design-Dateien für das Aussehen der Webseite
│   │   ├── js/          # Browser-Javascript für Interaktionen auf der Webseite
│   │   └── images/      # Bilder und andere Medien für die Webseite
│   ├── routes/          # Die verschiedenen Seiten/URLs der Webseite
│   └── views/           # Wiederverwendbare Seitenvorlagen (z.B. für Kopf- und Fußzeilen)
├── server.js            # Hauptdatei zum Starten des Servers und Festlegen der Webseiten-Adressen
├── package.json         # Liste aller benötigten Programme/Pakete für das Projekt
└── README.md            # Die Datei hier
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
