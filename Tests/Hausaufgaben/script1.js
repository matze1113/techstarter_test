document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let vorname = document.getElementById("vorname").value;
  let nachname = document.getElementById("nachname").value;
  let email = document.getElementById("email").value;
  let geburtsdatum = document.getElementById("geburtsdatum").value;

  // Überprüfen, ob alle Formularfelder ausgefüllt sind
  if (vorname === "" || nachname === "" || email === "" || geburtsdatum === "") {
    alert("Bitte füllen Sie alle Formularfelder aus.");
    return;
  }

  // Überprüfen, ob die E-Mail-Adresse eine gültige E-Mail-Adresse ist
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
    return;
  }

  // Überprüfen, ob das Geburtsdatum im richtigen Format (YYYY-MM-DD) eingegeben wurde
  let datePattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!datePattern.test(geburtsdatum)) {
    alert("Bitte geben Sie das Geburtsdatum im richtigen Format (YYYY-MM-DD) ein.");
    return;
  }

  // Erfolgsmeldung und Anzeige der eingegebenen Informationen
  alert("Formular erfolgreich abgesendet!");
    console.log("vorname: " + vorname);
    console.log("nachname: " + nachname);
    console.log("email: " + email);
    console.log("geburtsdatum: " + geburtsdatum);
});