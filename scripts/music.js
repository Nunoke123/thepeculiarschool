const audio = document.getElementById("bg-audio");
const toggleBtn = document.getElementById("audio-toggle");

// 1. Load saved state
document.addEventListener("DOMContentLoaded", () => {
    const savedSetting = localStorage.getItem("music");

    audio.volume = 0.35;

    if (savedSetting === "off") {
        audio.pause();
        toggleBtn.textContent = "🔈 Music: OFF";
    } else {
        audio.play().then(() => {
            toggleBtn.textContent = "🔊 Music: ON";
        }).catch(() => {
            toggleBtn.textContent = "🔈 Music: OFF (click to enable)";
        });
    }
});

// 2. Toggle button
toggleBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        toggleBtn.textContent = "🔊 Music: ON";
        localStorage.setItem("music", "on");
    } else {
        audio.pause();
        toggleBtn.textContent = "🔈 Music: OFF";
        localStorage.setItem("music", "off");
    }
});
