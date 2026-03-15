let defaultColor = document.body.style.backgroundColor;

function changeColor() {
    let color = document.getElementById("colorInput").value;
    // Bug: Does not check for valid color
    document.body.style.backgroundColor = color;
    document.getElementById("message").innerText = "Background changed to " + color;
}

function resetColor() {
    // Bug: Sometimes doesn’t reset correctly
    document.body.style.backgroundColor = defaultColor;
    document.getElementById("message").innerText = "Background reset";
}
