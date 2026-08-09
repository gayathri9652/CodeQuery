let coins = 0;
let xp = 0;
let hero = document.getElementById("hero");

let x = 100;
let y = 400;


// Hero movement

document.addEventListener("keydown", function(event){


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



    hero.style.left = x + "px";
    hero.style.top = y + "px";


    checkObjects();


});





function checkObjects(){


    let coin = document.getElementById("coin");
    let byte = document.getElementById("byte");


    let heroBox = hero.getBoundingClientRect();
    let coinBox = coin.getBoundingClientRect();
    let byteBox = byte.getBoundingClientRect();




    // 🪙 Coin Collection

    if(
    coin.style.display !== "none" &&
    heroBox.left < coinBox.right &&
    heroBox.right > coinBox.left &&
    heroBox.top < coinBox.bottom &&
    heroBox.bottom > coinBox.top
){

    coin.style.display="none";


    // 🪙 Add coins
    coins += 10;

    document.getElementById("coins").innerHTML = coins;


    document.getElementById("message").innerHTML =
    "🎉 Great! You collected a coin 🪙 +10 Coins";

}





    // 🤖 Byte Robot

    if(
        heroBox.left < byteBox.right &&
        heroBox.right > byteBox.left &&
        heroBox.top < byteBox.bottom &&
        heroBox.bottom > byteBox.top
    ){


        document.getElementById("message").innerHTML =
        "🤖 Byte: Welcome Coder! Your HTML mission is ready!";


        document.getElementById("missionBtn").style.display =
        "block";


    }



}





// 🎯 Start Mission Button
function startMission(){

    // Hide game objects
    document.getElementById("hero").style.display="none";
    document.getElementById("byte").style.display="none";
    document.getElementById("coin").style.display="none";
    document.getElementById("missionBtn").style.display="none";


    // Show code box
    document.getElementById("codeBox").style.display="block";


    document.getElementById("message").innerHTML =
    "🎯 Mission: Create an HTML heading using h1 tag";

}






// ✅ Check Player Answer

function checkAnswer(){


    let answer =
    document.getElementById("playerCode").value;



    if(answer.includes("<h1>")){
        xp += 50;
        localStorage.setItem("htmlCompleted", "true");
        

document.getElementById("xp").innerHTML = xp;


        document.getElementById("answerResult").innerHTML =
        "🎉 Correct! Mission Completed 🏆 +50 XP";
        document.getElementById("rewardBox").style.display="block";

document.getElementById("codeBox").style.display="none";


    }


    else{


        document.getElementById("answerResult").innerHTML =
        "❌ Try again. Use h1 tag";


    }


}
function moveHero(direction){


if(direction === "right"){
    x += 10;
}


if(direction === "left"){
    x -= 10;
}


if(direction === "up"){
    y -= 10;
}


if(direction === "down"){
    y += 10;
}


hero.style.left = x + "px";
hero.style.top = y + "px";


checkObjects();

}
function goToCSSCity(){

    window.location.href = "css/csscity.html";

}