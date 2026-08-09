// Hero
let currentMission = 1;
let hero = document.getElementById("hero");

let x = 80;
let y = 420;


// XP & Coins

let coins = Number(localStorage.getItem("coins")) || 0;
let xp = Number(localStorage.getItem("xp")) || 0;

document.getElementById("coins").innerHTML = coins;
document.getElementById("xp").innerHTML = xp;


// Keyboard Movement

document.addEventListener("keydown", function(event){

    if(event.key === "ArrowRight") x += 10;

    if(event.key === "ArrowLeft") x -= 10;

    if(event.key === "ArrowUp") y -= 10;

    if(event.key === "ArrowDown") y += 10;

    updateHero();

});


// Button Movement

function moveHero(direction){

    if(direction === "right") x += 10;

    if(direction === "left") x -= 10;

    if(direction === "up") y -= 10;

    if(direction === "down") y += 10;

    updateHero();

}


// Update Hero

function updateHero(){

    hero.style.left = x + "px";
    hero.style.top = y + "px";

    collectCoins();
    checkByte();
    checkBoard();

}
// Coin Collection

let allCoins = document.querySelectorAll(".coin");

function collectCoins(){

    let heroBox = hero.getBoundingClientRect();

    allCoins.forEach(function(coin){

        if(coin.style.display=="none") return;

        let coinBox = coin.getBoundingClientRect();

        if(

            heroBox.left < coinBox.right &&
            heroBox.right > coinBox.left &&
            heroBox.top < coinBox.bottom &&
            heroBox.bottom > coinBox.top

        ){

            coin.style.display="none";

            coins += 10;
            xp += 5;

            localStorage.setItem("coins", coins);
            localStorage.setItem("xp", xp);

            document.getElementById("coins").innerHTML = coins;
            document.getElementById("xp").innerHTML = xp;

        }

    });

}
// Byte Interaction

function checkByte(){

    let byte = document.getElementById("byte");

    let heroBox = hero.getBoundingClientRect();
    let byteBox = byte.getBoundingClientRect();


    if(

        heroBox.left < byteBox.right &&
        heroBox.right > byteBox.left &&
        heroBox.top < byteBox.bottom &&
        heroBox.bottom > byteBox.top

    ){

        document.getElementById("message").innerHTML =

        "🤖 Byte: Welcome Hero! Collect challenges and unlock CSS City. 📜";


        document.getElementById("missionBtn").style.display="inline-block";

    }

}
// Mission Board Interaction

function checkBoard(){

    let board = document.getElementById("board");


    let heroBox = hero.getBoundingClientRect();
    let boardBox = board.getBoundingClientRect();


    if(

        heroBox.left < boardBox.right &&
        heroBox.right > boardBox.left &&
        heroBox.top < boardBox.bottom &&
        heroBox.bottom > boardBox.top

    ){

        document.getElementById("message").innerHTML =

        "📜 Mission Board: 4 Advanced HTML Challenges are waiting Hero!";


        document.getElementById("missionBtn").style.display="inline-block";


    }

}
// Start Mission

function startMission(){

    document.getElementById("missionBox").style.display = "block";
    document.getElementById("missionBtn").style.display = "none";

    if(document.getElementById("controls")){
        document.getElementById("controls").style.display = "none";
    }

    document.getElementById("answer").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("hint").innerHTML = "";

    if(currentMission === 1){

        document.getElementById("missionTitle").innerHTML =
        "🌳 HTML Forest Mission 1/4";

        document.getElementById("question").innerHTML =
        `
        Fill the blank:

        <br><br>

        &lt;h1&gt;

        <br>

        _______

        <br>

        &lt;/h1&gt;
        `;

    }

    else if(currentMission === 2){

        document.getElementById("missionTitle").innerHTML =
        "🌳 HTML Forest Mission 2/4";

        document.getElementById("question").innerHTML =
        `
        Create an image using HTML.

        <br><br>

        Use the img tag with src attribute.
        `;

    }

    else if(currentMission === 3){

        document.getElementById("missionTitle").innerHTML =
        "🌳 HTML Forest Mission 3/4";

        document.getElementById("question").innerHTML =
        `
        Create a hyperlink using HTML.

        <br><br>

        Use the &lt;a&gt; tag with href attribute.
        `;

    }

    else if(currentMission === 4){

        document.getElementById("missionTitle").innerHTML =
        "🌳 HTML Forest Mission 4/4";

        document.getElementById("question").innerHTML =
        `
        Create an unordered list using HTML.

        <br><br>

        Use the &lt;ul&gt; and &lt;li&gt; tags.
        `;

    }

    document.getElementById("message").innerHTML =
    "🤖 Byte: Complete this challenge Hero!";
}


  function checkAnswer(){

    let answer = document.getElementById("answer").value.trim();

    if(answer === ""){
        document.getElementById("result").innerHTML =
        "⚠️ Please enter your HTML code.";

        return;
    }


    // Mission 1
    if(currentMission === 1){

        if(
            answer.includes("<h1>") &&
            answer.includes("</h1>")
        ){

            missionCompleted(1);

        }

        else{

            wrongAnswer(
                "🤖 Byte Hint: Use an opening and closing h1 tag."
            );

        }

    }


    // Mission 2
    else if(currentMission === 2){

        if(
            answer.includes("<img") &&
            answer.includes("src")
        ){

            missionCompleted(2);

        }

        else{

            wrongAnswer(
                "🤖 Byte Hint: Use the img tag and add a src attribute."
            );

        }

    }


    // Mission 3
    else if(currentMission === 3){

        if(
            answer.includes("<a") &&
            answer.includes("href") &&
            answer.includes("</a>")
        ){

            missionCompleted(3);

        }

        else{

            wrongAnswer(
                "🤖 Byte Hint: Use the a tag with an href attribute."
            );

        }

    }


    // Mission 4
    else if(currentMission === 4){

        if(
            answer.includes("<ul") &&
            answer.includes("<li") &&
            answer.includes("</li>") &&
            answer.includes("</ul>")
        ){

            missionCompleted(4);

        }

        else{

            wrongAnswer(
                "🤖 Byte Hint: Use ul for the list and li for list items."
            );

        }

    }

}  
function missionCompleted(missionNumber){

    document.getElementById("result").innerHTML =
    "✅ Correct Hero! Mission " + missionNumber + " Completed 🎉";

    document.getElementById("hint").innerHTML = "";

    xp += 20;
    coins += 10;

    localStorage.setItem("xp", xp);
    localStorage.setItem("coins", coins);

    document.getElementById("xp").innerHTML = xp;
    document.getElementById("coins").innerHTML = coins;


    if(missionNumber === 4){

    localStorage.setItem("htmlLevel2Completed", "true");

    document.getElementById("result").innerHTML =
    "🏆 HTML LEVEL 2 COMPLETED! 🎉🔥";

    document.getElementById("message").innerHTML =
    "🤖 Byte: Amazing Hero! You completed all Advanced HTML missions! 🌳🏆";

    document.getElementById("nextLevelBtn").style.display = "inline-block";

    setTimeout(function(){

        alert("🏆 Congratulations! HTML Level 2 Completed! 🎉");

    }, 500);

    return;
}


    // Move to next mission
    currentMission++;

    setTimeout(function(){

        document.getElementById("missionBox").style.display = "none";

        document.getElementById("missionBtn").style.display = "inline-block";

        document.getElementById("missionBtn").innerHTML =
        "📜 Start Mission " + currentMission;

        document.getElementById("message").innerHTML =
        "🤖 Byte: Mission " + currentMission + " is waiting for you! 🔥";

    }, 1000);

}


function wrongAnswer(message){

    document.getElementById("result").innerHTML =
    "❌ Wrong Answer";

    document.getElementById("hint").innerHTML =
    message;
}
function goToCSSCity(){

    localStorage.setItem("HTMLLevel2Completed", "true");

    window.location.href = "csslevel2.html";

}




    