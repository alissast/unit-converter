const darkModeBtn = document.getElementById("dark-mode-btn");
const inputEl = document.getElementById("input-field");
const convertBtn = document.getElementById("convert-btn");

document.addEventListener("DOMContentLoaded", function() {
    updateDarkModeBtn();
});

darkModeBtn.addEventListener("click", function() {
    toggleDarkMode();
    updateDarkModeBtn();
});

function toggleDarkMode() {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
}

function updateDarkModeBtn() {
    let currentTheme;
    if (document.body.classList.contains("dark-theme")) {
        currentTheme = "dark";
    } else {
        currentTheme = "light"
    };

    let iconHTML;
    if (currentTheme === "dark") {
        iconHTML = `<span class="material-symbols-outlined">dark_mode</span>`;
    } else {
        iconHTML = `<span class="material-symbols-outlined">light_mode</span>`;
    };
    darkModeBtn.innerHTML = iconHTML;
}



convertBtn.addEventListener("click", function() {
    console.log(inputEl.value);
});