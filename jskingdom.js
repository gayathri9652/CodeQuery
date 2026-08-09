let hero = document.getElementById("hero");

let x = 80;
let y = 420;

let coins = Number(localStorage.getItem("Coins")) || 0;
let xp = Number(localStorage.getItem("XP")) || 0;
let byteReached = false;
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

    checkByte();

}


// Check Robot

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
        "🤖 Byte: Great! Let's unlock the Royal Gate.";

        document.getElementById("lessonBtn").style.display = "block";

        if(!byteReached){

            coins += 20;
xp += 30;

localStorage.setItem("Coins", coins);
localStorage.setItem("XP", xp);
            document.getElementById("coins").innerHTML = coins;
            document.getElementById("xp").innerHTML = xp;

            byteReached = true;

        }

    }

}


// Start Mission

function startJSLesson(){

    document.getElementById("hero").style.display = "none";
    document.getElementById("byte").style.display = "none";

    document.getElementById("lessonBtn").style.display = "none";

    document.getElementById("codeBox").style.display = "block";

}


// Check Answer
function checkJS(){

    let answer = document.getElementById("playerCode").value;


    if(answer.includes("function attack")){


        document.getElementById("result").innerHTML =
        "💥 Attack Successful! Bug Monster Defeated!";


        // Monster defeat animation
        document.getElementById("monster").innerHTML = "💥";


        document.getElementById("message").innerHTML =
        "🎉 Congratulations Hero! JavaScript Kingdom Saved!";
        setTimeout(function(){

    document.getElementById("victoryBox").style.display="block";

},1000);


        // Rewards
        xp += 100;
coins += 50;

localStorage.setItem("XP", xp);
localStorage.setItem("Coins", coins);

        document.getElementById("xp").innerHTML = xp;

        document.getElementById("coins").innerHTML = coins;


    }


    else{


        document.getElementById("result").innerHTML =
        "❌ Wrong code! Create function attack()";


        document.getElementById("message").innerHTML =
        "👾 Bug Monster: Try again Hero!";

    }

}
function checkGate(){

    let answer = document.getElementById("playerCode").value;


    if(answer.includes("function openGate")){


        document.getElementById("result").innerHTML =
        "🚪 Gate Opened! Bug Monster is coming...";


        document.getElementById("gate").innerHTML =
        "🚪✨";


        document.getElementById("message").innerHTML =
        "👾 Warning! Bug Monster appeared!";
        showAttackMission();
        let monster = document.getElementById("monster");

monster.style.display = "block";
monster.style.position = "absolute";
monster.style.top = "200px";
monster.style.left = "600px";
monster.style.fontSize = "80px";
monster.style.zIndex = "999";


    }

    else{

        document.getElementById("result").innerHTML =
        "❌ Create openGate() function";

    }

}
function checkAttack(){

    let answer =
    document.getElementById("playerCode").value;


    if(answer.includes("function attack")){


        document.getElementById("result").innerHTML =
        "⚔️ Attack Successful!";


        let monster = document.getElementById("monster");


        monster.innerHTML = "👾😡";


        setTimeout(function(){

            monster.innerHTML = "💥";

        },1000);



        setTimeout(function(){

    monster.style.display="none";

    document.getElementById("codeBox").style.display="none";
    document.getElementById("lessonBtn").style.display="none";
    document.getElementById("message").style.display="none";
    document.getElementById("gate").style.display="none";
    document.getElementById("gateName").style.display="none";


    document.getElementById("finalBox").style.display="block";


    document.getElementById("finalBox").scrollIntoView();


    document.getElementById("message").innerHTML =
    "🎉 Congratulations Hero! JavaScript Kingdom Saved!";


    xp += 100;
coins += 50;

localStorage.setItem("XP", xp);
localStorage.setItem("Coins", coins);


    document.getElementById("xp").innerHTML = xp;
    document.getElementById("coins").innerHTML = coins;
    document.getElementById("nextLevelBtn").style.display = "block";


},2000);


    }


    else{


        document.getElementById("result").innerHTML =
        "❌ Create attack() function";


    }

}


function showAttackMission(){

    document.getElementById("codeBox").innerHTML = `

    <h2>👾 Bug Monster Battle</h2>

    <p>
    Create a JavaScript function named <b>attack()</b>
    </p>

    <textarea id="playerCode"
    placeholder="Type JavaScript code here"></textarea>

    <br><br>

    <button onclick="checkAttack()">
    ⚔️ Attack
    </button>

    <p id="result"></p>
    `;

}
        

function startLevel2() {

    localStorage.setItem("Level2Unlocked", "true");

    window.location.href = "../level2.html";

}


function completeLevel() {

    // Get existing XP and Coins
    let xp = Number(localStorage.getItem("XP")) || 0;
    let coins = Number(localStorage.getItem("Coins")) || 0;

    // World 2 completion bonus
    xp += 50;
    coins += 20;

    // Save rewards
    localStorage.setItem("XP", xp);
    localStorage.setItem("Coins", coins);

    // Mark World 2 as completed
    localStorage.setItem("World2Completed", "true");

    // Open World 2 Certificate
    window.location.href = "world2-certificate.html";
}