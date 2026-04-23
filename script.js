// 📲 WHATSAPP LINK
function generateWhatsAppLink(type, name) {
    const phoneNumber = "242068868801";

    const message = `Bonjour, je souhaite faire une réservation :

Type : ${type}
Nom : ${name}

Merci.`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

// 🚗 GÉNÉRATION DES VÉHICULES
function createVehicleCard(index) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="/public/Voitures/voiture${index}.jpeg" alt="Voiture de Luxe">
        <h3>Voiture de Luxe</h3>
        <p>à partir de 80 000 FCFA / jour</p>
        <a href="${generateWhatsAppLink('Véhicule', 'Voiture de Luxe')}">Réserver</a>
    `;

    return card;
}

// 🚗 AFFICHAGE DES 21 VOITURES
function displayVehicles() {
    const container = document.getElementById("cars");

    for (let i = 1; i <= 21; i++) {
        container.appendChild(createVehicleCard(i));
    }
}

// 💬 BOUTON WHATSAPP FLOTTANT
function createWhatsAppButton() {
    const btn = document.createElement("a");
    btn.href = "https://wa.me/242068868801";
    btn.className = "whatsapp-float";
    btn.innerText = "WhatsApp";

    document.body.appendChild(btn);
}

// 🚀 INITIALISATION
document.addEventListener("DOMContentLoaded", () => {
    displayVehicles();
    createWhatsAppButton();
});
// 🎬 SLIDER AUTOMATIQUE
function startBackgroundSlider() {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    setInterval(() => {
        slides[index].classList.remove("active");

        index = (index + 1) % slides.length;

        slides[index].classList.add("active");
    }, 4000); // change toutes les 4 secondes
}

document.addEventListener("DOMContentLoaded", () => {
    startBackgroundSlider();
});

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
function checkAvailability() {

  const checkin = document.getElementById("checkin")?.value;
  const checkout = document.getElementById("checkout")?.value;
  const guests = document.getElementById("guests")?.value || 1;

  if (!checkin || !checkout) {
    alert("Veuillez sélectionner les dates");
    return;
  }

  const message = `Bonjour, je veux réserver un appartement :
Arrivée : ${checkin}
Départ : ${checkout}
Voyageurs : ${guests}`;

  window.open(
    "https://wa.me/242068868801?text=" + encodeURIComponent(message),
    "_blank"
  );
}