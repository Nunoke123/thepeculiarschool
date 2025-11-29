const audio = document.getElementById("bg-audio");
const toggleBtn = document.getElementById("audio-toggle");

// Automatisch starten bij load (werkt soms enkel na user interaction)
document.addEventListener("DOMContentLoaded", () => {
    audio.volume = 0.35; 
    audio.play().catch(() => {
        // Browsers blokkeren auto-play → dan toont de knop dit:
        toggleBtn.textContent = "🔈 Music: OFF (click to enable)";
    });
});

// Wanneer je op de knop klikt
toggleBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        toggleBtn.textContent = "🔊 Music: ON";
    } else {
        audio.pause();
        toggleBtn.textContent = "🔈 Music: OFF";
    }
});
// Load saved state
document.addEventListener("DOMContentLoaded", () => {
    const savedSetting = localStorage.getItem("music");

    audio.volume = 0.35;

    if (savedSetting === "off") {
        audio.pause();
        toggleBtn.textContent = "🔈 Music: OFF";
    } else {
        audio.play().catch(() => {
            toggleBtn.textContent = "🔈 Music: OFF (click to enable)";
        });
    }
});

// Save new setting
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