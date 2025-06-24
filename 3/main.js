// js/main.js

// Chargement dynamique des ebooks (démo)
document.addEventListener("DOMContentLoaded", () => {
  const liste = document.getElementById("product-list") || document.getElementById("featured-products");
  if (liste) {
    const ebooks = [
      {
        titre: "La Sagesse intérieure",
        auteur: "Jean Dupont",
        prix: "5.99€",
        image: "img/ebook1.jpg"
      },
      {
        titre: "Éveil de l’esprit",
        auteur: "Marie Curie",
        prix: "7.99€",
        image: "img/ebook2.jpg"
      }
    ];
    ebooks.forEach(book => {
      const el = document.createElement("div");
      el.className = "product";
      el.innerHTML = `
        <img src="${book.image}" alt="${book.titre}" />
        <h4>${book.titre}</h4>
        <p>${book.auteur}</p>
        <p>${book.prix}</p>
        <button>Acheter</button>
      `;
      liste.appendChild(el);
    });
  }
});
