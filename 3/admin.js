// js/admin.js

document.getElementById("form-ajout").addEventListener("submit", function (e) {
  e.preventDefault();

  const titre = document.getElementById("titre").value;
  const auteur = document.getElementById("auteur").value;
  const prix = document.getElementById("prix").value;
  const description = document.getElementById("description").value;
  const fichier = document.getElementById("fichier").files[0];

  // Affichage des données pour test
  console.log({ titre, auteur, prix, description, fichier });

  alert("Ebook ajouté localement. Implémentation du stockage à faire (ex: JSON ou base externe).");

  this.reset();
});
