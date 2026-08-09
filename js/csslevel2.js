let hero = document.getElementById("hero");

let x = 80;
let y = 420;


// ================= SCORE =================

let coins = Number(localStorage.getItem("coins")) || 0;
let xp = Number(localStorage.getItem("xp")) || 0;

document.getElementById("coins").innerHTML = coins;
document.getElementById("xp").innerHTML = xp;


// ================= HERO MOVEMENT =================

document.addEventListener("keydown", function(event) {

    if(event.key === "ArrowRight") {
        x += 10;
    }

    if(event.key === "ArrowLeft") {
        x -= 10;
    }

    if(event.key === "ArrowUp") {
        y -= 10;
    }

    if(event.key === "ArrowDown") {
        y += 10;
    }

    keepHeroInsideCity();

    updateHero();

});


// ================= BUTTON MOVEMENT =================

function moveHero(direction) {

    if(direction === "right") {
        x += 10;
    }

    if(direction === "left") {
        x -= 10;
    }

    if(direction === "up") {
        y -= 10;
    }

    if(direction === "down") {
        y += 10;
    }

    keepHeroInsideCity();

    updateHero();

}


// ================= KEEP HERO INSIDE =================

function keepHeroInsideCity() {

    if(x < 0) {
        x = 0;
    }

    if(y < 0) {
        y = 0;
    }

    if(x > 700) {
        x = 700;
    }

    if(y > 450) {
        y = 450;
    }

}


// ================= UPDATE HERO =================

function updateHero() {

    hero.style.left = x + "px";
    hero.style.top = y + "px";

    collectCoins();
    checkByte();

}


// ================= COIN COLLECTION =================

let allCoins = document.querySelectorAll(".coin");

function collectCoins() {

    let heroBox = hero.getBoundingClientRect();

    allCoins.forEach(function(coin) {

        if(coin.style.display === "none") {
            return;
        }

        let coinBox = coin.getBoundingClientRect();

        if(
            heroBox.left < coinBox.right &&
            heroBox.right > coinBox.left &&
            heroBox.top < coinBox.bottom &&
            heroBox.bottom > coinBox.top
        ) {

            coin.style.display = "none";

            coins += 10;
            xp += 5;

            localStorage.setItem("coins", coins);
            localStorage.setItem("xp", xp);

            document.getElementById("coins").innerHTML = coins;
            document.getElementById("xp").innerHTML = xp;

        }

    });

}


// ================= BYTE INTERACTION =================

let byteReached = false;

function checkByte() {

    let byte = document.getElementById("byte");

    let heroBox = hero.getBoundingClientRect();
    let byteBox = byte.getBoundingClientRect();

    if(
        heroBox.left < byteBox.right &&
        heroBox.right > byteBox.left &&
        heroBox.top < byteBox.bottom &&
        heroBox.bottom > byteBox.top
    ) {

        if(!byteReached) {

            byteReached = true;

            document.getElementById("message").innerHTML =
            "🤖 Byte: Welcome Hero! Ready to master Advanced CSS? 🏙️🔥";

            startLesson();

        }

    }

}


// ================= LESSON DATA =================

let currentLesson = 0;
let lessons = [

    {
        title: "📦 Lesson 1: CSS Box Model",

        text: `
        🤖 Every HTML element is treated like a box.

        <br><br>

        The CSS Box Model has four important parts:

        <br><br>

        📄 <b>Content</b> → The actual text or image.

        <br>

        ↔️ <b>Padding</b> → Space inside the element, around the content.

        <br>

        🧱 <b>Border</b> → The line around the padding and content.

        <br>

        ↔️ <b>Margin</b> → Space outside the element.

        <br><br>

        Example:

        <br><br>

        <code>
        .card {
            padding: 20px;
            border: 2px solid black;
            margin: 15px;
        }
        </code>
        `
    },


    {
        title: "🎯 Lesson 2: CSS Selectors",

        text: `
        🤖 CSS selectors tell the browser which HTML elements should be styled.

        <br><br>

        🏷️ <b>Element Selector</b>

        <br>

        It selects all elements of a particular type.

        <br><br>

        <code>
        p {
            color: red;
        }
        </code>

        <br><br>

        🔵 <b>Class Selector</b>

        <br>

        It selects elements with a particular class.

        <br><br>

        <code>
        .card {
            padding: 10px;
        }
        </code>

        <br><br>

        🆔 <b>ID Selector</b>

        <br>

        It selects one element with a particular ID.

        <br><br>

        <code>
        #title {
            color: blue;
        }
        </code>
        `
    },


    {
        title: "🧩 Lesson 3: CSS Flexbox",

        text: `
        🤖 Flexbox is used to arrange elements in a flexible layout.

        <br><br>

        First, we use:

        <br><br>

        <code>
        display: flex;
        </code>

        <br><br>

        🎯 <b>justify-content</b> controls alignment along the main direction.

        <br><br>

        🎯 <b>align-items</b> controls alignment along the cross direction.

        <br><br>

        Example:

        <br><br>

        <code>
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        </code>
        `
    },


    {
        title: "📍 Lesson 4: CSS Position",

        text: `
        🤖 The CSS position property controls how an element is placed on the page.

        <br><br>

        Some important values are:

        <br><br>

        📍 <b>relative</b> → Positions an element relative to its normal position.

        <br>

        📍 <b>absolute</b> → Positions an element relative to its positioned parent.

        <br>

        📍 <b>fixed</b> → Keeps an element fixed on the screen.

        <br><br>

        Example:

        <br><br>

        <code>
        .badge {
            position: absolute;
            top: 10px;
            right: 10px;
        }
        </code>
        `
    },


    {
        title: "🖱️ Lesson 5: CSS Hover",

        text: `
        🤖 The :hover pseudo-class changes the style of an element when the mouse pointer moves over it.

        <br><br>

        For example, we can change a button's background color.

        <br><br>

        <code>
        button:hover {
            background: blue;
        }
        </code>

        <br><br>

        🖱️ Move the mouse over the button and the style will change.
        `
    },


    {
        title: "📱 Lesson 6: Responsive CSS",

        text: `
        🤖 Responsive CSS helps a website look good on different screen sizes.

        <br><br>

        We can use a media query with <b>@media</b>.

        <br><br>

        Example:

        <br><br>

        <code>
        @media (max-width: 600px) {

            .card {
                width: 100%;
            }

        }
        </code>

        <br><br>

        📱 When the screen becomes smaller, the CSS rules inside the media query can be applied.
        `
    }

];
  
        
        

// ================= START LESSON =================

function startLesson() {

    document.getElementById("lessonBox").style.display = "block";

    currentLesson = 0;

    showLesson();

}


// ================= SHOW LESSON =================

function showLesson() {

    let lesson = lessons[currentLesson];

    document.getElementById("lessonTitle").innerHTML =
    lesson.title;

    document.getElementById("lessonText").innerHTML =
    lesson.text;

    speakLesson();

}


// ================= BYTE VOICE =================

function speakLesson() {

    let text =
    document.getElementById("lessonText").innerText;

    let speech =
    new SpeechSynthesisUtterance(text);

    speech.rate = 0.9;

    speech.pitch = 1;

    speech.volume = 1;

    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);

}
function stopByteVoice() {

    window.speechSynthesis.cancel();

}


// ================= NEXT LESSON =================

function nextLesson() {

    currentLesson++;

    if(currentLesson >= lessons.length) {

        document.getElementById("lessonBox").style.display =
        "none";

        document.getElementById("missionBtn").style.display =
        "inline-block";

        document.getElementById("message").innerHTML =
        "🤖 Byte: Excellent Hero! 🎉 All CSS lessons completed. Now face the missions! 🎯";

        return;

    }

    showLesson();

}
// ================= MISSION SYSTEM =================

let currentMission = 1;

// ================= START MISSION =================

function startMission() {

    document.getElementById("missionBox").style.display = "block";

    document.getElementById("missionBtn").style.display = "none";

    document.getElementById("answer").value = "";

    document.getElementById("result").innerHTML = "";

    document.getElementById("hint").innerHTML = "";


    // ================= MISSION 1 =================

    if(currentMission === 1) {

        document.getElementById("missionTitle").innerHTML =
        "📦 CSS Mission 1/6 - Box Model";

        document.getElementById("question").innerHTML =
        `
        <b>🎯 Challenge:</b>

        <br><br>

        Create a CSS class called <b>.card</b>.

        <br><br>

        The card must have:

        <br><br>

        📏 Padding: <b>20px</b>

        <br>

        🧱 Border: <b>2px solid black</b>

        <br>

        ↔️ Margin: <b>15px</b>

        <br><br>

        💻 Write the CSS code for the card.
        `;

    }


    // ================= MISSION 2 =================

    else if(currentMission === 2) {

        document.getElementById("missionTitle").innerHTML =
        "🎯 CSS Mission 2/6 - Selectors";

        document.getElementById("question").innerHTML =
        `
        <b>🎯 Challenge:</b>

        <br><br>

        You have an element with the ID <b>title</b>.

        <br><br>

        Change its text color to <b>blue</b>.

        <br><br>

        💻 Use an <b>ID selector</b> to write the CSS code.
        `;

    }


    // ================= MISSION 3 =================

    else if(currentMission === 3) {

        document.getElementById("missionTitle").innerHTML =
        "🧩 CSS Mission 3/6 - Flexbox";

        document.getElementById("question").innerHTML =
        `
        <b>🎯 Challenge:</b>

        <br><br>

        Create a CSS class called <b>.container</b>.

        <br><br>

        Use Flexbox to:

        <br><br>

        🧩 Enable Flexbox

        <br>

        🎯 Center items horizontally

        <br>

        🎯 Center items vertically

        <br><br>

        💻 Write the CSS code using:

        <br><br>

        <b>display</b>

        <br>

        <b>justify-content</b>

        <br>

        <b>align-items</b>
        `;

    }
     // ================= MISSION 4 =================

else if(currentMission === 4) {

    document.getElementById("missionTitle").innerHTML =
    "📍 CSS Mission 4/6 - Position & z-index";

    document.getElementById("question").innerHTML =
    `
    <b>🎯 Challenge:</b>

    <br><br>

    Create a class called <b>.badge</b>.

    <br><br>

    Place the badge at the:

    <br><br>

    ⬆️ Top: <b>10px</b>

    <br>

    ➡️ Right: <b>10px</b>

    <br><br>

    Use <b>absolute positioning</b>.

    <br><br>

    Also give it a <b>z-index</b> of <b>10</b>.

    <br><br>

    💻 Write the CSS code.
    `;

}
// ================= MISSION 5 =================

else if(currentMission === 5) {

    document.getElementById("missionTitle").innerHTML =
    "🖱️ CSS Mission 5/6 - Hover & Transition";

    document.getElementById("question").innerHTML =
    `
    <b>🎯 Challenge:</b>

    <br><br>

    Create a class called <b>.button</b>.

    <br><br>

    When the mouse moves over the button:

    <br><br>

    🖱️ Change the background color to <b>blue</b>.

    <br>

    🎨 Change the text color to <b>white</b>.

    <br><br>

    Also add a smooth transition of <b>0.3s</b>.

    <br><br>

    💻 Write the CSS code using <b>:hover</b> and <b>transition</b>.
    `;

}
// ================= MISSION 6 =================

else if(currentMission === 6) {

    document.getElementById("missionTitle").innerHTML =
    "📱 CSS Mission 6/6 - Responsive Design";

    document.getElementById("question").innerHTML =
    `
    <b>🎯 Challenge:</b>

    <br><br>

    Create a media query for screens smaller than <b>600px</b>.

    <br><br>

    Inside the media query:

    <br><br>

    📦 Set <b>.card</b> width to <b>100%</b>.

    <br>

    📏 Set its padding to <b>10px</b>.

    <br><br>

    💻 Write the complete CSS code using <b>@media</b>.
    `;

}
// ================= FINAL BOSS =================

else if(currentMission === 7) {

    document.getElementById("missionTitle").innerHTML =
    "👑 CSS FINAL BOSS - Code Tower";

    document.getElementById("question").innerHTML =
    `
    <b>⚔️ FINAL CHALLENGE:</b>

    <br><br>

    The Code Tower needs a special CSS card.

    <br><br>

    Create a class called <b>.tower</b>.

    <br><br>

    Your CSS must include:

    <br><br>

    📦 <b>Box Model</b>

    <br>
    Padding: 20px
    <br>
    Border: 2px solid black
    <br>

    ↔️ Margin: 15px

    <br><br>

    🧩 <b>Flexbox</b>

    <br>
    display: flex
    <br>
    justify-content: center
    <br>
    align-items: center

    <br><br>

    🖱️ <b>Hover Effect</b>

    <br>
    Background becomes blue
    <br>
    Text becomes white

    <br><br>

    ✨ <b>Transition</b>

    <br>
    0.3 seconds

    <br><br>

    📱 <b>Responsive Design</b>

    <br>
    At screens smaller than 600px,
    width should become 100%.

    <br><br>

    ⚔️ <b>Write the complete CSS code!</b>
    `;

}


    document.getElementById("message").innerHTML =
    "🤖 Byte: Your challenge is ready, Hero! 🔥";

   
}
      

        
// ================= CHECK ANSWER =================

function checkAnswer() {

    let answer = document.getElementById("answer").value
        .toLowerCase()
        .replace(/\s/g, "");


    // ================= MISSION 1 =================

    if(currentMission === 1) {

        if(
            answer.includes(".card") &&
            answer.includes("padding:20px") &&
            answer.includes("border:2pxsolidblack") &&
            answer.includes("margin:15px")
        ) {

            document.getElementById("result").innerHTML =
            "✅ Correct! Mission 1 Completed! 🎉";

            document.getElementById("hint").innerHTML = "";

            xp += 20;
            coins += 10;

            localStorage.setItem("xp", xp);
            localStorage.setItem("coins", coins);

            document.getElementById("xp").innerHTML = xp;
            document.getElementById("coins").innerHTML = coins;


            currentMission = 2;

            document.getElementById("message").innerHTML =
            "🤖 Byte: Excellent work Hero! 📦 Box Model mastered! 🔥";


            setTimeout(function() {

                document.getElementById("missionBox").style.display =
                "none";

                document.getElementById("missionBtn").style.display =
                "inline-block";

                document.getElementById("missionBtn").innerHTML =
                "🎯 Start Mission 2";

            }, 1200);

        }

        else {

            document.getElementById("result").innerHTML =
            "❌ Wrong Answer";

            document.getElementById("hint").innerHTML =
            "🤖 Byte Hint: Use .card with padding, border, and margin.";

        }

    }


    // ================= MISSION 2 =================

    else if(currentMission === 2) {

        if(
            answer.includes("#title") &&
            answer.includes("color:blue")
        ) {

            document.getElementById("result").innerHTML =
            "✅ Correct! Mission 2 Completed! 🎉";

            document.getElementById("hint").innerHTML = "";

            xp += 20;
            coins += 10;

            localStorage.setItem("xp", xp);
            localStorage.setItem("coins", coins);

            document.getElementById("xp").innerHTML = xp;
            document.getElementById("coins").innerHTML = coins;


            currentMission = 3;

            document.getElementById("message").innerHTML =
            "🤖 Byte: Great job Hero! 🎯 Selector mastered!";


            setTimeout(function() {

                document.getElementById("missionBox").style.display =
                "none";

                document.getElementById("missionBtn").style.display =
                "inline-block";

                document.getElementById("missionBtn").innerHTML =
                "🎯 Start Mission 3";

            }, 1200);

        }

        else {

            document.getElementById("result").innerHTML =
            "❌ Wrong Answer";

            document.getElementById("hint").innerHTML =
            "🤖 Byte Hint: Use # before the ID name and set the color to blue.";

        }

    }
    // ================= MISSION 3 =================

else if(currentMission === 3) {

    if(
        answer.includes(".container") &&
        answer.includes("display:flex") &&
        answer.includes("justify-content:center") &&
        answer.includes("align-items:center")
    ) {

        document.getElementById("result").innerHTML =
        "✅ Correct! Mission 3 Completed! 🎉";

        document.getElementById("hint").innerHTML = "";

        xp += 20;
        coins += 10;

        localStorage.setItem("xp", xp);
        localStorage.setItem("coins", coins);

        document.getElementById("xp").innerHTML = xp;
        document.getElementById("coins").innerHTML = coins;


        currentMission = 4;

        document.getElementById("message").innerHTML =
        "🤖 Byte: Excellent Hero! 🧩 Flexbox mastered! 🔥";


        setTimeout(function() {

            document.getElementById("missionBox").style.display =
            "none";

            document.getElementById("missionBtn").style.display =
            "inline-block";

            document.getElementById("missionBtn").innerHTML =
            "🎯 Start Mission 4";

        }, 1200);

    }

    else {

        document.getElementById("result").innerHTML =
        "❌ Wrong Answer";

        document.getElementById("hint").innerHTML =
        "🤖 Byte Hint: Use display:flex, justify-content:center and align-items:center.";

    }

}
// ================= MISSION 4 =================

else if(currentMission === 4) {

    if(
        answer.includes(".badge") &&
        answer.includes("position:absolute") &&
        answer.includes("top:10px") &&
        answer.includes("right:10px") &&
        answer.includes("z-index:10")
    ) {

        document.getElementById("result").innerHTML =
        "✅ Correct! Mission 4 Completed! 🎉";

        document.getElementById("hint").innerHTML = "";

        xp += 20;
        coins += 10;

        localStorage.setItem("xp", xp);
        localStorage.setItem("coins", coins);

        document.getElementById("xp").innerHTML = xp;
        document.getElementById("coins").innerHTML = coins;


        currentMission = 5;

        document.getElementById("message").innerHTML =
        "🤖 Byte: Amazing Hero! 📍 Position and z-index mastered! 🔥";


        setTimeout(function() {

            document.getElementById("missionBox").style.display =
            "none";

            document.getElementById("missionBtn").style.display =
            "inline-block";

            document.getElementById("missionBtn").innerHTML =
            "🎯 Start Mission 5";

        }, 1200);

    }

    else {

        document.getElementById("result").innerHTML =
        "❌ Wrong Answer";

        document.getElementById("hint").innerHTML =
        "🤖 Byte Hint: Use absolute position, top, right and z-index.";

    }

}
// ================= MISSION 5 =================

else if(currentMission === 5) {

    if(
        answer.includes(".button") &&
        answer.includes("transition:0.3s") &&
        answer.includes(".button:hover") &&
        (
    answer.includes("background:blue") ||
    answer.includes("background-color:blue")
) &&
        answer.includes("color:white")
    ) {

        document.getElementById("result").innerHTML =
        "✅ Correct! Mission 5 Completed! 🎉";

        document.getElementById("hint").innerHTML = "";

        xp += 20;
        coins += 10;

        localStorage.setItem("xp", xp);
        localStorage.setItem("coins", coins);

        document.getElementById("xp").innerHTML = xp;
        document.getElementById("coins").innerHTML = coins;


        currentMission = 6;

        document.getElementById("message").innerHTML =
        "🤖 Byte: Fantastic Hero! 🖱️ Hover effects mastered! 🔥";


        setTimeout(function() {

            document.getElementById("missionBox").style.display =
            "none";

            document.getElementById("missionBtn").style.display =
            "inline-block";

            document.getElementById("missionBtn").innerHTML =
            "🎯 Start Mission 6";

        }, 1200);

    }

    else {

        document.getElementById("result").innerHTML =
        "❌ Wrong Answer";

        document.getElementById("hint").innerHTML =
        "🤖 Byte Hint: Use .button:hover, background, color and transition.";

    }

}
// ================= MISSION 6 =================

else if(currentMission === 6) {

    if(
        answer.includes("@media") &&
        answer.includes("max-width:600px") &&
        answer.includes(".card") &&
        answer.includes("width:100%") &&
        answer.includes("padding:10px")
    ) {

        document.getElementById("result").innerHTML =
        "✅ Correct! Mission 6 Completed! 🎉";

        document.getElementById("hint").innerHTML = "";

        xp += 30;
        coins += 15;

        localStorage.setItem("xp", xp);
        localStorage.setItem("coins", coins);

        document.getElementById("xp").innerHTML = xp;
        document.getElementById("coins").innerHTML = coins;


        currentMission = 7;

        document.getElementById("message").innerHTML =
        "🤖 Byte: Incredible Hero! 🎉 You completed all 6 CSS missions!";

        setTimeout(function() {

            document.getElementById("missionBox").style.display =
            "none";

            document.getElementById("missionBtn").style.display =
            "inline-block";

            document.getElementById("missionBtn").innerHTML =
            "👑 Enter CSS Final Boss";

        }, 1500);

    }

    else {

        document.getElementById("result").innerHTML =
        "❌ Wrong Answer";

        document.getElementById("hint").innerHTML =
        "🤖 Byte Hint: Use @media, max-width: 600px, .card, width: 100% and padding: 10px.";

    }

}
// ================= FINAL BOSS =================

else if(currentMission === 7) {

    if(

        answer.includes(".tower") &&

        answer.includes("padding:20px") &&

        answer.includes("border:2pxsolidblack") &&

        answer.includes("margin:15px") &&

        answer.includes("display:flex") &&

        answer.includes("justify-content:center") &&

        answer.includes("align-items:center") &&

        answer.includes("transition:0.3s") &&

        answer.includes(".tower:hover") &&

        answer.includes("background:blue") &&

        answer.includes("color:white") &&

        answer.includes("@media") &&

        answer.includes("max-width:600px") &&

        answer.includes("width:100%")

    ) {

        document.getElementById("result").innerHTML =
        "👑🔥 FINAL BOSS DEFEATED!";

        document.getElementById("hint").innerHTML =
        "🤖 Byte: Incredible! You mastered Advanced CSS! 🎉";


        xp += 100;
        coins += 50;


        localStorage.setItem("xp", xp);
        localStorage.setItem("coins", coins);


        document.getElementById("xp").innerHTML = xp;
        document.getElementById("coins").innerHTML = coins;


        currentMission = 8;


        document.getElementById("message").innerHTML =
        "🤖 Byte: YOU DID IT, HERO! 👑🏙️ CSS CITY HAS BEEN CONQUERED!";


        setTimeout(function() {

    document.getElementById("missionBox").style.display = "none";

    document.getElementById("missionBtn").style.display = "inline-block";

    document.getElementById("missionBtn").innerHTML =
        "⚡ Enter JavaScript Kingdom";

    document.getElementById("missionBtn").onclick =
        function() {
            window.location.href = "jslevel2.html";
        };

}, 2500);
    }

    else {

        document.getElementById("result").innerHTML =
        "❌ Final Boss still stands!";

        document.getElementById("hint").innerHTML =
        "🤖 Byte Hint: Combine Box Model + Flexbox + Hover + Transition + Responsive CSS.";

    }

}

}


        
