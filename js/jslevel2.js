// ================= SCORE =================

let coins = Number(localStorage.getItem("coins")) || 0;
let xp = Number(localStorage.getItem("xp")) || 0;

document.getElementById("coins").innerHTML = coins;
document.getElementById("xp").innerHTML = xp;


// ================= HERO =================

let hero = document.getElementById("hero");

let x = 80;
let y = 420;


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

    keepHeroInsideKingdom();

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

    keepHeroInsideKingdom();

    updateHero();

}


// ================= KEEP HERO INSIDE =================

function keepHeroInsideKingdom() {

    if(x < 0) {
        x = 0;
    }

    if(y < 0) {
        y = 0;
    }

    if(x > 750) {
        x = 750;
    }

    if(y > 470) {
        y = 470;
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


            document.getElementById("coins").innerHTML =
            coins;

            document.getElementById("xp").innerHTML =
            xp;


            document.getElementById("message").innerHTML =
            "🪙 Coin collected! ⭐ +5 XP";

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
            "🤖 Byte: Welcome Hero! ⚡ JavaScript Kingdom needs your help!";


            document.getElementById("lessonBtn").style.display =
            "inline-block";

        }

    }

}
// ================= JAVASCRIPT LESSONS =================

let currentLesson = 0;

let lessons = [

    // ================= LESSON 1 =================

    {
        title: "🧠 Lesson 1: Functions & Parameters",

        text: `
        🤖 Welcome to the Function Training Camp!

        <br><br>

        A function is a reusable block of JavaScript code.

        <br><br>

        We create a function using the <b>function</b> keyword.

        <br><br>

        Example:

        <br><br>

        <code>
        function attack() {
            console.log("Bug defeated!");
        }
        </code>

        <br><br>

        ⚔️ We can also pass information into a function using parameters.

        <br><br>

        Example:

        <br><br>

        <code>
        function attack(power) {
            console.log(power);
        }
        </code>

        <br><br>

        🎯 Parameters allow a function to work with different values.
        `
    },


    // ================= LESSON 2 =================

    {
        title: "📦 Lesson 2: Arrays",

        text: `
        🤖 The kingdom has many treasures!

        <br><br>

        An <b>array</b> stores multiple values inside one variable.

        <br><br>

        Example:

        <br><br>

        <code>
        let coins = [10, 20, 30, 40];
        </code>

        <br><br>

        🎯 Each value has an index.

        <br><br>

        The first item starts at index <b>0</b>.

        <br><br>

        Example:

        <br><br>

        <code>
        coins[0]
        </code>

        <br><br>

        gives the first value.
        `
    },


    // ================= LESSON 3 =================

    {
        title: "🔁 Lesson 3: Loops",

        text: `
        🤖 There are many monsters in the kingdom!

        <br><br>

        A loop allows us to repeat code.

        <br><br>

        Example:

        <br><br>

        <code>
        for(let i = 0; i < 5; i++) {
            console.log(i);
        }
        </code>

        <br><br>

        🔁 The loop repeats until its condition becomes false.

        <br><br>

        This is useful when we need to process many items.
        `
    },


    // ================= LESSON 4 =================

    {
        title: "🧩 Lesson 4: Objects",

        text: `
        🤖 Every hero has different properties!

        <br><br>

        An <b>object</b> stores related information using key-value pairs.

        <br><br>

        Example:

        <br><br>

        <code>
        let hero = {
            name: "Byte",
            level: 10,
            power: 100
        };
        </code>

        <br><br>

        🎯 We can access a property using:

        <br><br>

        <code>
        hero.name
        </code>

        <br><br>

        Objects are useful for representing real-world data.
        `
    },


    // ================= LESSON 5 =================

    {
        title: "🖥️ Lesson 5: DOM Manipulation",

        text: `
        🤖 The kingdom screen can be controlled using JavaScript!

        <br><br>

        The <b>DOM</b> represents the HTML page as objects.

        <br><br>

        We can select an element using:

        <br><br>

        <code>
        document.getElementById("title");
        </code>

        <br><br>

        We can change its content using:

        <br><br>

        <code>
        element.innerHTML = "Kingdom";
        </code>

        <br><br>

        ⚡ This allows JavaScript to change the webpage dynamically.
        `
    },


    // ================= LESSON 6 =================

    {
        title: "⚡ Lesson 6: Events",

        text: `
        🤖 The kingdom reacts to your actions!

        <br><br>

        An <b>event</b> happens when something occurs on a webpage.

        <br><br>

        Examples include:

        <br><br>

        🖱️ Click

        <br>

        ⌨️ Key press

        <br>

        🖱️ Mouse movement

        <br><br>

        We can listen for an event using:

        <br><br>

        <code>
        element.addEventListener("click", function() {
            alert("Attack!");
        });
        </code>
        `
    },


    // ================= LESSON 7 =================

    {
        title: "💾 Lesson 7: LocalStorage",

        text: `
        🤖 The kingdom must remember your progress!

        <br><br>

        <b>localStorage</b> allows us to store data in the browser.

        <br><br>

        Save data:

        <br><br>

        <code>
        localStorage.setItem("coins", 100);
        </code>

        <br><br>

        Read data:

        <br><br>

        <code>
        localStorage.getItem("coins");
        </code>

        <br><br>

        💾 This data can remain even after refreshing the page.
        `
    }

];


// ================= START LESSON =================

function startLesson() {

    document.getElementById("lessonBox").style.display =
    "block";

    document.getElementById("lessonBtn").style.display =
    "none";

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


// ================= STOP BYTE VOICE =================

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
        "🤖 Byte: Excellent Hero! 🎉 All JavaScript lessons completed!";

        return;

    }

    showLesson();

}
// ================= MISSION SYSTEM =================

let currentMission = 1;


// ================= START MISSION =================

function startMission() {

    document.getElementById("missionBox").style.display =
    "block";

    document.getElementById("missionBtn").style.display =
    "none";

    document.getElementById("answer").value = "";

    document.getElementById("result").innerHTML = "";

    document.getElementById("hint").innerHTML = "";


    // ================= MISSION 1 =================

    if(currentMission === 1) {

        document.getElementById("missionTitle").innerHTML =
        "🐛 Mission 1/7 - Bug Attack";


        document.getElementById("question").innerHTML =
        `
        <b>⚔️ The Bug Monster is attacking the kingdom!</b>

        <br><br>

        Create a function called <b>attack()</b>.

        <br><br>

        When the function runs, it must print:

        <br><br>

        <b>"Bug defeated!"</b>

        <br><br>

        💻 Write the JavaScript code.
        `;

    }
    // ================= MISSION 2 =================

else if(currentMission === 2) {

    document.getElementById("missionTitle").innerHTML =
    "🪙 Mission 2/7 - Coin Treasure";


    document.getElementById("question").innerHTML =
    `
    <b>🗺️ A treasure chest contains four coin values!</b>

    <br><br>

    Create an array called <b>coins</b>.

    <br><br>

    Store these values:

    <br><br>

    🪙 10 &nbsp;&nbsp; 🪙 20 &nbsp;&nbsp; 🪙 30 &nbsp;&nbsp; 🪙 40

    <br><br>

    💻 Write the JavaScript code.
    `;

}
// ================= MISSION 3 =================

else if(currentMission === 3) {

    document.getElementById("missionTitle").innerHTML =
    "🔁 Mission 3/7 - Loop Dungeon";


    document.getElementById("question").innerHTML =
    `
    <b>👾 Three monsters are blocking the dungeon!</b>

    <br><br>

    Create an array:

    <br><br>

    <code>
    let monsters = ["Bug", "Goblin", "Dragon"];
    </code>

    <br><br>

    Then use a <b>for loop</b> to print every monster.

    <br><br>

    💻 Write the complete JavaScript code.
    `;

}
// ================= MISSION 4 =================

else if(currentMission === 4) {

    document.getElementById("missionTitle").innerHTML =
    "🏰 Mission 4/7 - Object Castle";


    document.getElementById("question").innerHTML =
    `
    <b>🏰 The Castle needs its Hero data!</b>

    <br><br>

    Create an object called <b>heroData</b>.

    <br><br>

    It must contain:

    <br><br>

    👤 name → <b>"Hero"</b>

    <br>

    ⭐ level → <b>10</b>

    <br>

    ⚔️ power → <b>100</b>

    <br><br>

    💻 Write the JavaScript object.
    `;

}
// ================= MISSION 5 =================

else if(currentMission === 5) {

    document.getElementById("missionTitle").innerHTML =
    "🖥️ Mission 5/7 - DOM Lab";


    document.getElementById("question").innerHTML =
    `
    <b>🛠️ The Kingdom's control panel is broken!</b>

    <br><br>

    There is an HTML element with:

    <br><br>

    <code>id="message"</code>

    <br><br>

    Use JavaScript DOM manipulation to change its text to:

    <br><br>

    <b>"Kingdom Repaired!"</b>

    <br><br>

    💻 Use <b>getElementById()</b> and <b>innerHTML</b>.
    `;

}
// ================= MISSION 6 =================

else if(currentMission === 6) {

    document.getElementById("missionTitle").innerHTML =
    "⚡ Mission 6/7 - Event Tower";


    document.getElementById("question").innerHTML =
    `
    <b>⚡ The Event Tower is offline!</b>

    <br><br>

    There is a button with:

    <br><br>

    <code>id="attackBtn"</code>

    <br><br>

    Add a <b>click event</b> using:

    <br><br>

    <b>addEventListener()</b>

    <br><br>

    When the button is clicked, change the message to:

    <br><br>

    <b>"Attack Activated!"</b>

    <br><br>

    💻 Write the JavaScript code.
    `;

}
// ================= FINAL MISSION 7 =================

else if(currentMission === 7) {

    document.getElementById("missionTitle").innerHTML =
    "💾 Final Mission 7/7 - Save Crystal";


    document.getElementById("question").innerHTML =
    `
    <b>🔮 The Final Save Crystal is locked!</b>

    <br><br>

    The kingdom must remember the Hero's score.

    <br><br>

    💾 Save the value <b>100</b> into localStorage using the key:

    <br><br>

    <code>finalScore</code>

    <br><br>

    Then retrieve the saved value.

    <br><br>

    🎯 You must use:

    <br><br>

    <b>localStorage.setItem()</b>

    <br>

    <b>localStorage.getItem()</b>

    <br><br>

    💻 Write the JavaScript code.
    `;

}


    document.getElementById("message").innerHTML =
    "🤖 Byte: Defeat the Bug Monster, Hero! ⚔️🔥";

}


// ================= CHECK ANSWER =================

function checkAnswer() {

    let answer =
    document.getElementById("answer").value
    .toLowerCase()
    .replace(/\s/g, "");


    // ================= MISSION 1 =================

    if(currentMission === 1) {

        if(
            answer.includes("functionattack()") &&
            answer.includes("console.log") &&
            answer.includes("bugdefeated!")
        ) {

            document.getElementById("result").innerHTML =
            "💥 BUG MONSTER DEFEATED! 🎉";

            document.getElementById("hint").innerHTML = "";


            // ================= REWARD =================

            xp += 20;

            coins += 10;


            localStorage.setItem("xp", xp);

            localStorage.setItem("coins", coins);


            document.getElementById("xp").innerHTML =
            xp;

            document.getElementById("coins").innerHTML =
            coins;


            // ================= GAME CHANGE =================

            document.getElementById("bugMonster").style.display =
            "none";


            document.getElementById("gate").innerHTML =
            "🚪🔓";


            document.getElementById("message").innerHTML =
            "🤖 Byte: Amazing! 👾 Bug defeated! 🚪 The gate is unlocked!";


            // ================= NEXT MISSION =================

            currentMission = 2;


            setTimeout(function() {

                document.getElementById("missionBox").style.display =
                "none";

                document.getElementById("missionBtn").style.display =
                "inline-block";

                document.getElementById("missionBtn").innerHTML =
                "🪙 Start Mission 2";

            }, 1500);

        }


        else {

            document.getElementById("result").innerHTML =
            "❌ Attack failed!";


            document.getElementById("hint").innerHTML =
            "🤖 Byte Hint: Create function attack() and use console.log().";

        }

    }
    // ================= MISSION 2 =================

else if(currentMission === 2) {

    if(
        answer.includes("letcoins=[10,20,30,40]") ||
        answer.includes("constcoins=[10,20,30,40]") ||
        answer.includes("varcoins=[10,20,30,40]")
    ) {

        document.getElementById("result").innerHTML =
        "🪙 Treasure Unlocked! 🎉";

        document.getElementById("hint").innerHTML = "";


        // ================= REWARD =================

        xp += 20;

        coins += 10;


        localStorage.setItem("xp", xp);

        localStorage.setItem("coins", coins);


        document.getElementById("xp").innerHTML =
        xp;

        document.getElementById("coins").innerHTML =
        coins;


        // ================= GAME CHANGE =================

        document.getElementById("missionBoard").innerHTML =
        "📜✨";

        document.getElementById("message").innerHTML =
        "🤖 Byte: Excellent! 🪙 The treasure has been collected!";


        // ================= NEXT MISSION =================

        currentMission = 3;


        setTimeout(function() {

            document.getElementById("missionBox").style.display =
            "none";

            document.getElementById("missionBtn").style.display =
            "inline-block";

            document.getElementById("missionBtn").innerHTML =
            "🔁 Start Mission 3";

        }, 1500);

    }


    else {

        document.getElementById("result").innerHTML =
        "❌ Treasure locked!";

        document.getElementById("hint").innerHTML =
        "🤖 Byte Hint: Create an array named coins and store 10, 20, 30 and 40.";

    }

}
// ================= MISSION 3 =================

else if(currentMission === 3) {

    if(

        answer.includes("letmonsters=[\"bug\",\"goblin\",\"dragon\"]") &&
        answer.includes("for(") &&
        answer.includes("console.log")

    ) {

        document.getElementById("result").innerHTML =
        "💥 Dungeon Cleared! 🎉";

        document.getElementById("hint").innerHTML = "";


        // ================= REWARD =================

        xp += 25;

        coins += 15;


        localStorage.setItem("xp", xp);

        localStorage.setItem("coins", coins);


        document.getElementById("xp").innerHTML =
        xp;

        document.getElementById("coins").innerHTML =
        coins;


        // ================= GAME CHANGE =================

        document.getElementById("bugMonster").style.display =
        "none";

        document.getElementById("gate").innerHTML =
        "🚪🔓✨";


        document.getElementById("message").innerHTML =
        "🤖 Byte: Incredible! 🔁 All dungeon monsters defeated!";


        // ================= NEXT MISSION =================

        currentMission = 4;


        setTimeout(function() {

            document.getElementById("missionBox").style.display =
            "none";

            document.getElementById("missionBtn").style.display =
            "inline-block";

            document.getElementById("missionBtn").innerHTML =
            "🧩 Start Mission 4";

        }, 1500);

    }


    else {

        document.getElementById("result").innerHTML =
        "❌ The dungeon is still blocked!";


        document.getElementById("hint").innerHTML =
        "🤖 Byte Hint: Create the monsters array and use a for loop with console.log().";

    }

}
// ================= MISSION 4 =================

else if(currentMission === 4) {

    if(

        answer.includes("letherodata=") &&
        answer.includes("name:\"hero\"") &&
        answer.includes("level:10") &&
        answer.includes("power:100")

    ) {

        document.getElementById("result").innerHTML =
        "🏰 CASTLE ACTIVATED! 🎉";

        document.getElementById("hint").innerHTML = "";


        // ================= REWARD =================

        xp += 25;

        coins += 15;


        localStorage.setItem("xp", xp);

        localStorage.setItem("coins", coins);


        document.getElementById("xp").innerHTML =
        xp;

        document.getElementById("coins").innerHTML =
        coins;


        // ================= GAME CHANGE =================

        document.getElementById("castle").innerHTML =
        "🏰✨👑";

        document.getElementById("castle").style.transform =
        "scale(1.2)";


        document.getElementById("message").innerHTML =
        "🤖 Byte: Amazing! 👑 The Castle recognizes its Hero!";


        // ================= NEXT MISSION =================

        currentMission = 5;


        setTimeout(function() {

            document.getElementById("missionBox").style.display =
            "none";

            document.getElementById("missionBtn").style.display =
            "inline-block";

            document.getElementById("missionBtn").innerHTML =
            "🖥️ Start Mission 5";

        }, 1500);

    }


    else {

        document.getElementById("result").innerHTML =
        "❌ Castle remains locked!";


        document.getElementById("hint").innerHTML =
        "🤖 Byte Hint: Create heroData with name, level and power properties.";

    }

}
// ================= MISSION 5 =================

else if(currentMission === 5) {

    if(

        answer.includes("document.getelementbyid(\"message\")") &&
        answer.includes("innerhtml") &&
        answer.includes("kingdomrepaired!")

    ) {

        document.getElementById("result").innerHTML =
        "🖥️ DOM SYSTEM REPAIRED! 🎉";

        document.getElementById("hint").innerHTML = "";


        // ================= REWARD =================

        xp += 30;

        coins += 20;


        localStorage.setItem("xp", xp);

        localStorage.setItem("coins", coins);


        document.getElementById("xp").innerHTML =
        xp;

        document.getElementById("coins").innerHTML =
        coins;


        // ================= GAME CHANGE =================

        document.getElementById("message").innerHTML =
        "🖥️ Kingdom Repaired! ⚡ DOM Power Activated!";


        document.getElementById("castle").innerHTML =
        "🏰💡✨";


        // ================= NEXT MISSION =================

        currentMission = 6;


        setTimeout(function() {

            document.getElementById("missionBox").style.display =
            "none";

            document.getElementById("missionBtn").style.display =
            "inline-block";

            document.getElementById("missionBtn").innerHTML =
            "⚡ Start Mission 6";

        }, 1500);

    }


    else {

        document.getElementById("result").innerHTML =
        "❌ System repair failed!";


        document.getElementById("hint").innerHTML =
        "🤖 Byte Hint: Select the message element using getElementById() and change innerHTML.";

    }

}
// ================= MISSION 6 =================

else if(currentMission === 6) {

    if(

        answer.includes("document.getelementbyid(\"attackbtn\")") &&
        answer.includes("addeventlistener") &&
        answer.includes("click") &&
        answer.includes("attackactivated!")

    ) {

        document.getElementById("result").innerHTML =
        "⚡ EVENT TOWER ACTIVATED! 🎉";

        document.getElementById("hint").innerHTML = "";


        // ================= REWARD =================

        xp += 30;

        coins += 20;


        localStorage.setItem("xp", xp);

        localStorage.setItem("coins", coins);


        document.getElementById("xp").innerHTML =
        xp;

        document.getElementById("coins").innerHTML =
        coins;


        // ================= GAME CHANGE =================

        document.getElementById("castle").innerHTML =
        "🏰⚡💥";


        document.getElementById("message").innerHTML =
        "🤖 Byte: Event Tower activated! ⚡ Attack system is ready!";


        // ================= NEXT MISSION =================

        currentMission = 7;


        setTimeout(function() {

            document.getElementById("missionBox").style.display =
            "none";

            document.getElementById("missionBtn").style.display =
            "inline-block";

            document.getElementById("missionBtn").innerHTML =
            "💾 Start Final Mission";

        }, 1500);

    }


    else {

        document.getElementById("result").innerHTML =
        "❌ Event system failed!";


        document.getElementById("hint").innerHTML =
        "🤖 Byte Hint: Select attackBtn, use addEventListener(), and listen for a click.";

    }

}
// ================= FINAL MISSION 7 =================

else if(currentMission === 7) {

    if(

        answer.includes("localstorage.setitem(\"finalscore\",100)") &&
        answer.includes("localstorage.getitem(\"finalscore\")")

    ) {

        document.getElementById("result").innerHTML =
        "🔮 FINAL CRYSTAL ACTIVATED! 👑🎉";

        document.getElementById("hint").innerHTML = "";


        // ================= FINAL REWARD =================

        xp += 50;

        coins += 30;


        localStorage.setItem("xp", xp);

        localStorage.setItem("coins", coins);


        document.getElementById("xp").innerHTML =
        xp;

        document.getElementById("coins").innerHTML =
        coins;


        // ================= GAME TRANSFORMATION =================

        document.getElementById("castle").innerHTML =
        "🏰✨👑✨🏰";


        document.getElementById("gate").innerHTML =
        "🚪🔓👑";


        document.getElementById("message").innerHTML =
        "🤖 Byte: YOU DID IT, HERO! 👑 JavaScript Kingdom has been saved! 🎉🔥";


        // ================= FINAL STATE =================

        currentMission = 8;
        // ================= LEVEL 2 COMPLETE =================

localStorage.setItem("HTMLLevel2Completed", "true");
localStorage.setItem("CSSLevel2Completed", "true");
localStorage.setItem("JSLevel2Completed", "true");

localStorage.setItem("htmlLevel2Completed", "true");
localStorage.setItem("cssLevel2Completed", "true");
localStorage.setItem("jsLevel2Completed", "true");

localStorage.setItem("level2Completed", "true");
localStorage.setItem("World2Completed", "true");
currentMission = 8;

localStorage.setItem("World2Completed", "true");
localStorage.setItem("level2Completed", "true");

setTimeout(function(){

    window.location.href = "world2-certificate.html";

}, 2000);

        setTimeout(function() {

            document.getElementById("missionBox").style.display =
            "none";

            document.getElementById("missionBtn").style.display =
            "none";

        }, 2000);

    }


    else {

        document.getElementById("result").innerHTML =
        "❌ The Save Crystal is still locked!";


        document.getElementById("hint").innerHTML =
        "🤖 Byte Hint: Save finalScore with setItem() and retrieve it with getItem().";

    }

}

}