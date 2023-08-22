const convertButton = document.getElementById("convertButton");
const resultDiv = document.getElementById("result");

convertButton.addEventListener("click", convertToRoman);

function convertToRoman() {
    const numberInput = document.getElementById("numberInput").value;
    const romanNumerals = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

    if (numberInput >= 1 && numberInput <= 10) {
        resultDiv.textContent = `${numberInput} sayısının Roma rakamı: ${romanNumerals[numberInput]}`;
    } else {
        resultDiv.textContent = "Geçerli bir sayı girin (1-10 arası)";
    }
}
