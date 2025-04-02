"use strict";

/* NAVIGATION LINKS EFFECT */
const nav = document.querySelector(".navbar");
const arrows = document.querySelectorAll(".arrow");
let hoverTimeout;

const navHover = function (e, opacity) {
  clearTimeout(hoverTimeout);

  hoverTimeout = setTimeout(() => {
    if (e.target.classList.contains("navbar__link")) {
      const link = e.target;
      const siblings = link.closest(".navbar").querySelectorAll(".navbar__link");
      const title = link.closest(".navbar").querySelector(".navbar__title");

      siblings.forEach(el => {
        if (el !== link) el.style.opacity = opacity;
      });

      if (title) title.style.opacity = opacity;
    }

    if (e.target.classList.contains("navbar__title")) {
      const title = e.target;
      const links = title.closest(".navbar").querySelectorAll(".navbar__link");

      links.forEach(el => {
        el.style.opacity = opacity;
      });
    }
  }, 100); // 100ms delay to slow down effect
};

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  let timeout;

  dropdown.addEventListener("mouseenter", function () {
      clearTimeout(timeout); 
      this.classList.add("active");
  });

  dropdown.addEventListener("mouseleave", function () {
      timeout = setTimeout(() => {
          this.classList.remove("active");
      }, 500);
  });
});

/* MOBILE NAVIGATION TOGGLE */
const navOpen = document.querySelector(".navOpen");
const navClose = document.querySelector(".navClose");
const navigation = document.querySelector(".navbar");
const navtitle = document.querySelector(".navtitle");

navOpen.addEventListener("click", () => {
  navClose.style.display = "block";
  navOpen.style.display = "none";
  navigation.classList.add("open");
  navtitle.style.display = "none";
});

navClose.addEventListener("click", () => {
  navClose.style.display = "none";
  navOpen.style.display = "block";
  navigation.classList.remove("open");
  navtitle.style.display = "block";
});

/* SCROLL FUNCTION (BACK TO TOP) */
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
