// ==========================
// ELEMENTS
// ==========================

const loading = document.getElementById("loading");

const welcome = document.getElementById("welcome");

const birthday = document.getElementById("birthday");

const openBtn = document.getElementById("openBtn");

const ignoreBtn = document.getElementById("ignoreBtn");

const music = document.getElementById("music");

const letterBtn = document.getElementById("letterBtn");

const letter = document.getElementById("letter");

const typingText = document.getElementById("typingText");

const blowBtn = document.getElementById("blowBtn");

// ==========================
// LOADING SCREEN
// ==========================

window.addEventListener("load", () => {

    setTimeout(() => {

        loading.style.display = "none";

        welcome.classList.remove("hide");

    }, 3000);

});

// ==========================
// OPEN BUTTON
// ==========================

openBtn.addEventListener("click", () => {

    welcome.classList.add("hide");

    birthday.classList.remove("hide");

    music.play();

});

// ==========================
// IGNORE BUTTON
// ==========================

ignoreBtn.addEventListener("mouseover", moveButton);

ignoreBtn.addEventListener("touchstart", moveButton);

function moveButton() {

    const x = Math.random() * 300 - 150;

    const y = Math.random() * 200 - 100;

    ignoreBtn.style.transform = `translate(${x}px, ${y}px)`;

}

// ==========================
// LETTER BUTTON
// ==========================

letterBtn.addEventListener("click", () => {

    letter.classList.remove("hide");

    typeLetter();

});
// ==========================
// TYPEWRITER EFFECT
// ==========================

const message = `Dear Sapna Devi ❤️

Happy Birthday!

On this beautiful day, I just want to say thank you for being such an amazing sister.

Your smile brings happiness to everyone around you.

May God always bless you with good health, success, happiness, and lots of love.

Keep smiling, keep shining, and always stay the wonderful person you are.

Enjoy your special day and make lots of beautiful memories.

🎂 Happy Birthday Once Again ❤️

With Lots of Love,

Your Brother
Harish ❤️`;

let index = 0;
let typingStarted = false;

function typeLetter() {

    if (typingStarted) return;

    typingStarted = true;

    function typing() {

        if (index < message.length) {

            typingText.innerHTML += message.charAt(index);

            index++;

            setTimeout(typing, 45);

        }

    }

    typing();

}

// ==========================
// BLOW CANDLES
// ==========================

blowBtn.addEventListener("click", () => {

    alert("🎉 Happy Birthday Sapna Devi ❤️\n\nMay God Bless You Always! 🎂");

});

// ==========================
// FLOATING HEARTS
// ==========================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let pos = -20;

    const interval = setInterval(() => {

        pos += 4;

        heart.style.bottom = pos + "px";

        heart.style.opacity = 1 - pos / 700;

        if (pos > 700) {

            clearInterval(interval);

            heart.remove();

        }

    }, 30);

}

setInterval(createHeart, 800);

// ==========================
// END
// ==========================
