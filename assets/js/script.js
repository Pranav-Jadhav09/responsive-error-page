"use strict";

// Show Menu
const navMenu = document.getElementById("nav--menu");
const navToggle = document.getElementById("nav--toggle");
const navClose = document.getElementById("nav--close");
const navLink = document.querySelectorAll(".nav-link");

// Menu Shown - validate if navToggle exist
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu Hidden - validate if navClose exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove show-menu class on clicking each nav-links
const linkAction = () => {
  const navMenu = document.getElementById("nav--menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => {
  n.addEventListener("click", linkAction);
});

// On Scroll Reveal Animation
const sr = ScrollReveal({
  distance: "90px",
  duration: 3000,
});

sr.reveal(`.home-data`, { origin: "top", delay: 400 });
sr.reveal(`.home-img`, { origin: "bottom", delay: 600 });
sr.reveal(`.home-footer`, { origin: "bottom", delay: 800 });
