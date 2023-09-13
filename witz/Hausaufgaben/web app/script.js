document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
  
    // Hier kannst du den Code hinzufügen, um die E-Mail zu senden
    // Zum Beispiel kannst du die JavaScript Email API oder eine Server-seitige Lösung verwenden
  
    // Hier kannst du den Code hinzufügen, um eine Bestätigungsnachricht anzuzeigen
    alert("Die automatische Antwort wurde gesendet!");
  
    // Hier kannst du den Code hinzufügen, um das Formular zurückzusetzen
    document.getElementById("emailForm").reset();
  });