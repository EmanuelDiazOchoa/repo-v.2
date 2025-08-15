// Aseguramos que el código solo corra en el navegador
if (typeof window !== "undefined") {
  const iconoSol = document.getElementById("icono-sol");
  const iconoLuna = document.getElementById("icono-luna");
  const body = document.body;

  // Estado inicial desde localStorage
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    body.classList.add("dark-mode");
    iconoSol.classList.remove("hidden");
    iconoLuna.classList.add("hidden");
  } else {
    body.classList.add("light-mode");
    iconoSol.classList.add("hidden");
    iconoLuna.classList.remove("hidden");
  }

  // Evento: activar modo oscuro
  iconoLuna?.addEventListener("click", () => {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    iconoLuna.classList.add("hidden");
    iconoSol.classList.remove("hidden");
    localStorage.setItem("theme", "dark");
  });

  // Evento: activar modo claro
  iconoSol?.addEventListener("click", () => {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    iconoSol.classList.add("hidden");
    iconoLuna.classList.remove("hidden");
    localStorage.setItem("theme", "light");
  });
}
