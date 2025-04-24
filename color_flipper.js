const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Violet', 'Brown', 'Maroon', 'Gold', 'Navy', 'Crimson', 'Aqua', 'Turquoise', 'Silver', 'Teal', 'Wheat', 'Salmon', 'Lime'];
const colorButton = document.getElementById('color-btn');
const colorName = document.getElementById('color-name');

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

colorButton.addEventListener('click', () => {
    const newColor = getRandomColor();
    document.body.style.colorName = newColor;
    if (newColor === "Red" || newColor === "Blue" || newColor === "Green" || newColor === "Purple" || newColor === "Brown" || newColor === "Maroon" || newColor === "Navy" || newColor === "Crimson" || newColor === "Teal") {
        colorName.classList.add('active');
    } else {
        colorName.classList.remove('active');
    }
    document.body.style.backgroundColor = newColor;
    colorName.textContent = `Color: ${newColor}`;
    colorButton.style.color = newColor;
    colorButton.style.backgroundColor = "white";
});
