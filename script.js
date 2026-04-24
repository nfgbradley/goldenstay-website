// 📲 WHATSAPP LINK
function generateWhatsAppLink(type, name, price = "") {
  const phoneNumber = "242068868801";

  const message = `Bonjour, je souhaite faire une réservation :

Type : ${type}
Nom : ${name}
Prix : ${price} FCFA / jour

Merci.`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}



// =========================
// AFFICHAGE VEHICULES
// =========================
function displayVehicles() {
  const container = document.getElementById("cars");

  container.innerHTML = "";

  vehicles.forEach(v => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${v.image}" alt="${v.name}">
      <h3>${v.name}</h3>
      <p>Location de luxe</p>
      <div class="price">${v.price.toLocaleString()} FCFA / jour</div>
      <a class="btn-reserve"
         href="https://wa.me/242068868801?text=Je veux réserver ${v.name} - ${v.price} FCFA">
         Réserver
      </a>
    `;

    container.appendChild(card);
  });
}

// =========================
// BOOKING
// =========================
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

// =========================
// SLIDER BACKGROUND
// =========================
function startBackgroundSlider() {
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  if (!slides.length) return;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 4000);
}

// =========================
// HEADER SCROLL
// =========================
function handleHeader() {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// =========================
// INIT UNIQUE
// =========================
document.addEventListener("DOMContentLoaded", () => {
  console.log("🔥 JS GOLDENSTAY OK");

  displayVehicles();
  startBackgroundSlider();
  handleHeader();
});
function filterGallery(category, btn) {
  const items = document.querySelectorAll(".gallery-grid .item");
  const tabs = document.querySelectorAll(".tab");

  // reset active
  tabs.forEach(t => t.classList.remove("active"));
  btn.classList.add("active");

  // filtrage
  items.forEach(img => {
    if (category === "all") {
      img.style.display = "block";
    } else {
      img.style.display = img.classList.contains(category)
        ? "block"
        : "none";
    }
  });
}
// 📸 GALERIES PAR TYPE
const galleries = {
  standard: [
    "public/Appartements/standardroom1.jpg",
    "public/Appartements/standardroom2.jpg",

  ],
  junior: [
    "public/Appartements/juniorsuite1.jpg",
    "public/Appartements/juniorsuite2.jpg",
    "public/Appartements/juniorsuite3.jpg",
    "public/Appartements/juniorsuite4.jpg",
    "public/Appartements/juniorsuite5.jpg"
  ],
  senior: [
    "public/Appartements/seniorsuite1.jpg",
    "public/Appartements/seniorsuite2.jpg",
    "public/Appartements/seniorsuite3.jpg",
    "public/Appartements/seniorsuite4.jpg"
  ],
  prestige: [
    "public/Appartements/Duplex1.jpeg",
    "public/Appartements/Duplex2.jpeg"
  ]
};

// 🔥 INIT
document.addEventListener("DOMContentLoaded", () => {

  console.log("🔥 Galerie OK");

  const cards = document.querySelectorAll(".listing-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {

      const type = card.dataset.type;

      console.log("CLICK:", type);

      openGallery(type);
    });
  });
});

// 🔥 OPEN
function openGallery(type) {

  const modal = document.getElementById("galleryModal");
  const container = document.getElementById("galleryContent");

  if (!galleries[type]) {
    console.error("❌ Type inconnu:", type);
    return;
  }

  container.innerHTML = "";

  galleries[type].forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.style.width = "100%";
    img.style.height = "200px";
    img.style.objectFit = "cover";
    container.appendChild(img);
  });

  modal.style.display = "block";
}

// ❌ CLOSE
function closeGallery() {
  document.getElementById("galleryModal").style.display = "none";
}