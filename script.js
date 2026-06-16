const ayranContainer = document.getElementById("ayran-container");
const startScreenImg = document.querySelector(".start-screen");
const askout = document.getElementById("askout-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("askout-title"); 
const catImg1 = document.getElementById("askoutcat1");
const catImg2 = document.getElementById("askoutcat2");
const buttonsWrapper = document.getElementById("askout-buttons");
const finalText = document.getElementById("final-text");


ayranContainer.addEventListener("click", () => {
    startScreenImg.src = "openAyran.gif"; 
    setTimeout(() => {
        ayranContainer.style.display = "none";
        askout.style.display = "flex";
        setTimeout(() => {
            document.querySelector(".askout-window").classList.add("open");
        }, 50);
    }, 1000);
});
noBtn.addEventListener("mouseover", () => {
    const min = 150;
    const max = 250;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.2s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

yesBtn.addEventListener("click", () => {
    fetch("https://discord.com/api/webhooks/1516434102461534320/b10j4jEspqyNvc94wTyZLqteS__TEq8O4Qq5XA6VeXWQ9ztoi_4A_dzT1ZKIOg1XPTQ8", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: "🚨 CEYDA SAID YES 🚨" })
    });     
    title.textContent = "whoaAha really??";
    document.querySelector(".askout-window").classList.add("final");
    const picknickimg = document.querySelector("#catPicknick img");
    picknickimg.src = "catPicknick.gif";
    document.getElementById("catPicknick").style.display = "block";
    finalText.style.display = "block";
    startFireworks();
});

function startFireworks() {
    setInterval(() => {
        shootRocket();
    }, 800);
}

function shootRocket() {
    const rocket = document.createElement("img");
    rocket.src = "rocket.gif?t=" + new Date().getTime();
    rocket.classList.add("firework-rocket");

    const randomX = Math.random() * 80;
    const randomY = Math.random() * 40 + 10;

    rocket.style.left = `${randomX}%`;
    rocket.style.top = `${randomY}%`;

    document.getElementById("askout-container").appendChild(rocket);

    setTimeout(() => {
        rocket.remove();
    }, 5000);
}