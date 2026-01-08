const toast = document.getElementById("toast");
const showToast = (msg="Copied ✅") => {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(window.__t);
  window.__t = setTimeout(()=> toast.classList.remove("show"), 1100);
};

async function copyText(text){
  try{
    await navigator.clipboard.writeText(text);
    showToast("Copied ✅");
  }catch(e){
    showToast("Copy not supported");
  }
}

// Discord button: copy username, then open Discord app/web
document.getElementById("discordBtn")?.addEventListener("click", async () => {
  await copyText("Morgan_1805");
  window.open("https://discord.com/app", "_blank", "noopener");
});

// Twitter button: open X profile
document.getElementById("twitterBtn")?.addEventListener("click", () => {
  window.open("https://x.com/Morgan_1805", "_blank", "noopener");
});

// Footer Discord link
document.getElementById("discordLink")?.addEventListener("click", async (e) => {
  e.preventDefault();
  await copyText("Morgan_1805");
  window.open("https://discord.com/app", "_blank", "noopener");
});