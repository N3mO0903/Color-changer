let defaultColor = document.body.style.backgroundColor;

function changeColor() {
    let color = document.getElementById("colorInput").value.toLowerCase();

    // Intentional bug: switches to a different color
    let wrongColors = {
        "red": "green",
        "green": "blue",
        "blue": "yellow",
        "yellow": "purple",
        "purple": "orange"
    };

    let newColor = wrongColors[color] || color; // default: keep the color if not in map
    document.body.style.backgroundColor = newColor;
    document.getElementById("message").innerText = "Background changed to " + newColor;
}

function resetColor() {
    document.body.style.backgroundColor = defaultColor;
    document.getElementById("message").innerText = "Background reset";
}
