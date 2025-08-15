import { gsap } from "gsap";

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const themeSwitch = document.querySelector("#theme-toggle");
    const body = document.body;

    const setTheme = (isDark) => {
      if (isDark) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        themeSwitch.checked = false;
        localStorage.setItem("theme", "dark");
      } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        themeSwitch.checked = true;
        localStorage.setItem("theme", "light");
      }
    };

    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme || savedTheme === "dark") {
      setTheme(true);
    } else {
      setTheme(false);
    }

    themeSwitch.addEventListener("change", (e) => {
      setTheme(!e.target.checked);
    });

    // Efecto GSAP TextScramble
    const scrambleText = (element, text, duration = 2) => {
      const chars = "!<>-_\\/[]{}—=+*^?#________";
      const splitText = text.split("");
      const scrambled = splitText.map(() => chars[Math.floor(Math.random() * chars.length)]);
      element.textContent = scrambled.join("");

      gsap.to({}, {
        duration,
        onUpdate: () => {
          const updated = splitText.map((c) => {
            return Math.random() > 0.85 ? c : chars[Math.floor(Math.random() * chars.length)];
          });
          element.textContent = updated.join("");
        },
        onComplete: () => {
          element.textContent = text;
        }
      });
    };

    const titleEl = document.getElementById("sobre-mi-title");
    const textEl = document.getElementById("sobre-mi-text");

    if (titleEl) scrambleText(titleEl, titleEl.textContent, 1.5);
    if (textEl) scrambleText(textEl, textEl.textContent, 2.5);
  });
}