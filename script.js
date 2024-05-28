function generateCard() {
    let suits = ["♦", "♥", "♠", "♣"];
    let values = [
        "A",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
    ];

    let randomSuit = suits[Math.floor(Math.random() * suits.length)];
    let randomValue = values[Math.floor(Math.random() * values.length)];

    let color = randomSuit === "♦" || randomSuit === "♥" ? "red" : "nothing";

    document.getElementById("number").innerHTML = `<span style="color: ${color};">${randomValue}</span>`; // prettier-ignore
    document.getElementById("topLeft").innerHTML = `<span style="color: ${color};">${randomSuit}</span>`; // prettier-ignore
    document.getElementById("bottomRight").innerHTML = `<span style="color: ${color};">${randomSuit}</span>`; // prettier-ignore
}
