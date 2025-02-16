document.addEventListener("DOMContentLoaded", function () {
    const bubbleContainer = document.querySelector(".floating-bubbles");
    for (let i = 0; i < 20; i++) {
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = Math.random() * 100 + "vw";
        bubble.style.animationDuration = (Math.random() * 3 + 2) + "s";
        bubbleContainer.appendChild(bubble);
    }
});

function exitPage() {
    window.close();
}
