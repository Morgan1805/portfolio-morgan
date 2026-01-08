const toastEl = document.getElementById("toast");
const yearEl = document.getElementById("year");
const discordBtn = document.getElementById("discordBtn");

yearEl.textContent = new Date().getFullYear();

function toast(msg){
  if(!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1600);
}

// Small “preview/code” buttons in projects section (placeholders)
document.querySelectorAll("[data-toast]").forEach(btn => {
  btn.addEventListener("click", () => toast(btn.getAttribute("data-toast")));
});

// Discord: open Discord + copy username so people can add you fast
const DISCORD_USERNAME = "Morgan_1805";
const DISCORD_OPEN_URL = "https://discord.com/app"; // opens Discord web/app page

discordBtn?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(DISCORD_USERNAME);
    toast("Discord username copied: Morgan_1805");
  } catch (e) {
    toast("Copy failed — username: Morgan_1805");
  }
  window.open(DISCORD_OPEN_URL, "_blank", "noopener,noreferrer");
});
