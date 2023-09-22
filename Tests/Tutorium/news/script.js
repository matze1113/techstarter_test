// script.js

// Funktion zum Abrufen der Nachrichten
function getNews(category) {
    // Erstellen Sie eine AJAX-Anfrage an die Nachrichten-API
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=de&category=' + category + '&apiKey=0c1b54ac27a641889cb2076ccb35145b', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Erfolgreiche Antwort erhalten
       let response = JSON.parse(xhr.responseText);
        let articles = response.articles;
  
        // Nachrichtencontainer leeren
      let newsContainer = document.getElementById('news');
        newsContainer.innerHTML = '';
  
        // Nachrichten anzeigen
        articles.forEach(function(article) {
          let title = article.title;
          let description = article.description;
          let url = article.url;
  
          let newsItem = document.createElement('div');
          newsItem.innerHTML = '<h2>' + title + '</h2>' +
                               '<a href="' + url + '">Lesen Sie weiter</a>';
  
          newsContainer.appendChild(newsItem);
        });
      } else {
        // Fehler bei der AJAX-Anfrage
        console.log('Fehler beim Abrufen der Nachrichten. Statuscode: ' + xhr.status);
      }
    };
    xhr.send();
  }
  
  // Funktion zum Aktualisieren der Nachrichten
  function updateNews() {
    let category = document.getElementById('category').value;
    getNews(category);
  }
  
  // Nachrichten beim Laden der Seite abrufen
  getNews('technology');
  
  // Nachrichten alle 3 Sekunden aktualisieren
  setInterval(updateNews, 3000);