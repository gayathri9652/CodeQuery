let xp = 0;
let coins = 0;
let byteReached = false;
let hero = document.getElementById("hero");

console.log("CSS City JS Loaded");


let x = 100;
let y = 300;


// =====================
// Keyboard Movement
// =====================

document.addEventListener("keydown", function(event){

    console.log(event.key);


    if(event.key === "ArrowRight"){
        x += 10;
    }


    if(event.key === "ArrowLeft"){
        x -= 10;
    }


    if(event.key === "ArrowUp"){
        y -= 10;
    }


    if(event.key === "ArrowDown"){
        y += 10;
    }



    updateHero();

});



// =====================
// Button Movement
// =====================


function moveRight(){

    x += 20;

    updateHero();

}



function moveLeft(){

    x -= 20;

    updateHero();

}



function moveUp(){

    y -= 20;

    updateHero();

}



function moveDown(){

    y += 20;

    updateHero();

}




// =====================
// Update Hero Position
// =====================

function updateHero(){

    hero.style.left = x + "px";

    hero.style.top = y + "px";


    checkByte();

}



// =====================
// Byte Checking
// =====================
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
        "🤖 Byte: Welcome to CSS City!";


        document.getElementById("lessonBtn").style.display="block";


        if(!byteReached){

            coins += 10;
            xp += 20;

            document.getElementById("coins").innerHTML = coins;
            document.getElementById("xp").innerHTML = xp;

            byteReached = true;

        }

    }

}



// =====================
// Lesson Button
// =====================




function checkCSS(){

    let answer = document.getElementById("playerCode").value;

if(answer.includes("red")){

    document.getElementById("result").innerHTML =
    "🎉 Correct! Mission Completed!";

    document.getElementById("building").style.color = "red";

    xp += 50;
    coins += 20;

    document.getElementById("xp").innerHTML = xp;
    document.getElementById("coins").innerHTML = coins;
    localStorage.setItem("jsUnlocked","true");

document.getElementById("result").innerHTML +=
"<br>⚡ JavaScript Kingdom Unlocked 🔓";
document.getElementById("jsReward").style.display="block";

}
else{

    document.getElementById("result").innerHTML =
    "❌ Wrong! Try again.";

}

}

   function startCSSLesson(){

    document.getElementById("lessonBtn").style.display="none";


    // Hide hero and robot only
    document.getElementById("hero").style.display="none";

    document.getElementById("byte").style.display="none";


    // Keep building visible
    document.getElementById("building").style.display="block";


    // Show mission
    document.getElementById("codeBox").style.display="block";


    document.getElementById("message").innerHTML =
    "🎨 Mission: Change Code Tower color to red";


}
function goToJS(){

window.location.href="jskingdom.html";

}
