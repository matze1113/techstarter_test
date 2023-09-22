import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Bücherliste
const books = [
  {
    id: 1,
    titel: 'Frankenstein',
    author: 'Mary Wollstonecraft Shelley',
    source: 'buch1.txt'
  },
  {
    id: 2,
    titel: 'Romeo und Julia',
    author: 'William Shakespeare',
    source: 'buch2.txt'
  },
  {
    id: 3,
    titel: 'Alices Abenteuer im Wunderland',
    author: 'Lewis Carroll',
    source: 'buch3.txt'
  }
];

// Startseite
app.get('/', (req, res) => {
  let bookList = '<h1>Meine Bibliothek</h1><ul>';
  books.forEach((book) => {
    bookList += `<li>${book.titel} - ${book.author} <a href="/read/${book.source}"><button>Lesen</button></a></li>`;
  });
  bookList += '</ul>';
  res.send(bookList);
});

// Datei anzeigen
app.get('/read/:file', (req, res) => {
  const fileName = req.params.file;
  const filePath = path.join(__dirname, fileName);
  res.sendFile(filePath);
});

// Server starten
app.listen(port, () => {
  console.log(`Express-Server läuft auf Port ${port}`);
});


