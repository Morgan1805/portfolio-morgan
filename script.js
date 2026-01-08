(() => {
  const DISCORD_USERNAME = "Morgan_1805";
  const toast = document.getElementById("toast");

  function showToast() {
    if (!toast) return;
    toast.classList.add("show");
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => toast.classList.remove("show"), 2200);
  }

  async function copyDiscord() {
    try {
      await navigator.clipboard.writeText(DISCORD_USERNAME);
      showToast();
    } catch (e) {
      const input = document.createElement("input");
      input.value = DISCORD_USERNAME;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
      showToast();
    }
  }

  function openDiscord() {
    window.location.href = "discord://-/";
  }

  function bind(id, openToo=false) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("click", async () => {
      await copyDiscord();
      if (openToo) openDiscord();
    });
  }

  bind("discordBtn", false);
  bind("discordBtn2", true);
  bind("discordBtn3", false);
})();
