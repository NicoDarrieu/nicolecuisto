// Déclaration de variable
var btn = document.getElementById("Contact");
var modal = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];
var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail');
var error = document.querySelector('.error');

// Lors de l'ouverture de modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Lors de fa fermeture du modal 
span.onclick = function() {
  modal.style.display = "none";
}

// Lorsqu'on clique à l'extérieur du modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Fonction réinitialiser
function resetForm () {
  document.getElementById ("frm").reset();
}

// Chaque fois que l'utilisateur saisit quelque chose, on verifie la validité" du champ e-mail
// S'il y a un message d'erreur affiché et que le champ est valide, on retire l'erreur
// On réinitialise le contenu
// On réinitialise l'état visuel du message
email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    error.innerHTML = ""; 
    error.className = "error"; 
  }
}, false);

  // Chaque fois que l'utilisateur tente d'envoyer les données
  // on vérifie que le champ email est valide. 
  // S'il est invalide, on affiche un message d'erreur personnalisé
  // Et on empêche l'envoi des données du formulaire

form.addEventListener("submit", function (event) {
  if (!email.validity.valid) {
    error.innerHTML = "J'attends une adresse e-mail correcte, mon cher !";
    error.className = "error active";
    event.preventDefault();
  }
}, false);

