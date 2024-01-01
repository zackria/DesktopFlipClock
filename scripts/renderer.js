const SETTINGS_BTN = document.getElementById("settings");
const CLOSE_BTN = document.getElementById("close");
const FULL_BTN = document.getElementById("fullscreen");

CLOSE_BTN.addEventListener("click", () => {
  api.close();
});

FULL_BTN.addEventListener("click", () => {
  api.fullscreen();
});

SETTINGS_BTN.addEventListener("click", () => {
  log();
});

function log() {
  console.log("testing");
}
