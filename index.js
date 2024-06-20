const darkModeBtn = document.getElementById("dark-mode-btn");
const inputEl = document.getElementById("input-field");
const convertBtn = document.getElementById("convert-btn");

const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

const meterToFoot =  3.28084;
const literToGallon =  0.264172;
const kiloToPound =  2.20462;

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
    }

    let iconHTML;
    if (currentTheme === "dark") {
        iconHTML = `<span class="material-symbols-outlined">dark_mode</span>`;
    } else {
        iconHTML = `<span class="material-symbols-outlined">light_mode</span>`;
    }
    darkModeBtn.innerHTML = iconHTML;
}

convertBtn.addEventListener("click", function() {
    let baseInputValue = Number(inputEl.value);

    if (isNaN(baseInputValue)) {
        alert("Please enter a valid number");
        return;
    }

    convertLength(baseInputValue);
    convertVolume(baseInputValue);
    convertMass(baseInputValue);
})

function convertLength(value) {
    let meterToFootConversion = (value * meterToFoot).toFixed(3);
    let footToMeterConversion = (value / meterToFoot).toFixed(3);

    lengthEl.textContent = `${value} meters = ${meterToFootConversion} | ${value} feet = ${footToMeterConversion} meters`;
}

function convertVolume(value) {
    let literToGallonConversion = (value * literToGallon).toFixed(3);
    let gallonToLiterConversion = (value / literToGallon).toFixed(3);

    volumeEl.textContent =  `${value} liters = ${literToGallonConversion} gallons | ${value} gallons = ${gallonToLiterConversion} feet`;
}

function convertMass(value) {
    let kiloToPoundConversion = (value * kiloToPound).toFixed(3);
    let poundToKiloConversion = (value / kiloToPound).toFixed(3);

    massEl.textContent =  `${value} kilos = ${kiloToPoundConversion} pounds | ${value} pounds = ${poundToKiloConversion} kilos`;
}