(function () {
  // Change this to your actual Discord handle (what people search for in Add Friend)
  const DISCORD_USERNAME = "Morgan_1805";
  const DISCORD_URL = "https://discord.com/channels/@me";

  function openDiscord() {
    // Copy your username so visitors can paste it in Discord → Add Friend
    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(DISCORD_USERNAME);
      } else {
        const ta = document.createElement("textarea");
        ta.value = DISCORD_USERNAME;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
    } catch (_) {}

    window.open(DISCORD_URL, "_blank", "noopener");
  }

  ["discordBtn","discordBtn2","discordBtn3","discordBtn4"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", openDiscord);
  });

  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
})();
