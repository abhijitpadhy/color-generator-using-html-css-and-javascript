document.addEventListener("DOMContentLoaded", function () {
    const colorBox = document.getElementById("color");
    const generateButton = document.getElementById("generate");

    generateButton.addEventListener("click", () => {
        const randomColor = generateRandomColor();
        colorBox.textContent = randomColor;
        colorBox.style.backgroundColor = randomColor;
    });

    function generateRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
