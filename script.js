// ===============================
// HTML MISSION 1
// ===============================

function checkMission() {

    let userCode = document.getElementById("codeBox").value;
    let result = document.getElementById("result");

    if(userCode.includes("<h1>") && userCode.includes("</h1>")) {

        result.innerHTML =
        "🎉 Great Job Coder!<br>" +
        "The Banyan Tree gate is unlocked! 🌳<br>" +
        "You earned 20 XP ⭐";
        // Add Rewards
let xp = Number(localStorage.getItem("XP")) || 0;
let coins = Number(localStorage.getItem("Coins")) || 0;

xp += 20;
coins += 5;

localStorage.setItem("XP", xp);
localStorage.setItem("Coins", coins);


        if(document.getElementById("banyanTree")){
            document.getElementById("banyanTree").innerHTML =
            "🌳<h2>Great Banyan Tree 🔓</h2>";
        }


        if(document.getElementById("robotMessage")){
            document.getElementById("robotMessage").innerHTML =
            "🎉 Amazing Coder!<br>" +
            "You unlocked the Great Banyan Tree 🌳🔓";
        }


        if(document.getElementById("player")){
            document.getElementById("player").style.transform =
            "translateX(250px)";
        }


        if(document.getElementById("nextMission")){
            document.getElementById("nextMission").style.display="block";
        }

    }

    else {

        result.innerHTML =
        "❌ Try again! Use the h1 tag.";

    }

}


// ===============================
// MISSION 2
// ===============================

function startMission2(){

    document.getElementById("mission").innerHTML = `

    <h2>🎯 Mission 2</h2>

    <p>
    The river is blocking your path 🌊<br>
    Create a paragraph to open the River Bridge.
    </p>


    <h3>&lt;p&gt;I am learning coding&lt;/p&gt;</h3>


    <textarea id="codeBox"
    placeholder="Write your HTML code here..."></textarea>

    <br><br>

    <button onclick="checkMission2()">
    Submit Code
    </button>


    <p id="result"></p>

    `;

}



function checkMission2(){

    let userCode = document.getElementById("codeBox").value;

    let result = document.getElementById("result");


    if(userCode.includes("<p>") && userCode.includes("</p>")){


        let xp = Number(localStorage.getItem("XP")) || 0;
        let coins = Number(localStorage.getItem("Coins")) || 0;


        xp += 20;
        coins += 5;


        localStorage.setItem("XP", xp);
        localStorage.setItem("Coins", coins);



        result.innerHTML =
        "🎉 Excellent Coder!<br>" +
        "River Bridge unlocked 🌊<br>" +
        "You earned 20 XP ⭐";


    }

    else{


        result.innerHTML =
        "❌ Try again! Use paragraph tag <p>";

    }

}



// ===============================
// ROBOT LESSON
// ===============================


let lessonStep=0;


function nextLesson(){

    let lessonText=document.getElementById("lessonText");

    let button=document.querySelector(".mission button");


    lessonStep++;


    if(lessonStep==1){

        lessonText.innerHTML =
        "🤖 Robot Lesson 1:<br><br>" +
        "HTML means HyperText Markup Language.<br>" +
        "It creates webpage structure.";

    }


    else if(lessonStep==2){

        lessonText.innerHTML =
        "🤖 Robot Lesson 2:<br><br>" +
        "HTML uses tags.<br>" +
        "Examples: Heading, Paragraph, Image.";

    }


    else if(lessonStep==3){

        lessonText.innerHTML =
        "🤖 Lesson Complete 🎉<br><br>" +
        "Ready for your first mission!";


        if(button){

            button.innerHTML="Start Mission 🎯";
            button.onclick=startFirstMission;

        }

    }

}



// ===============================
// CSS CITY
// ===============================


function goCSSCity(){

    window.location.href="csscity.html";

}



// ===============================
// INDEX LOGIN / SIGNUP
// ===============================


let loginBtn=document.getElementById("loginBtn");

let signupBtn=document.getElementById("signupBtn");


if(loginBtn){

    loginBtn.onclick=function(){

        window.location.href="email.html";

    }

}


if(signupBtn){

    signupBtn.onclick=function(){

        window.location.href="signup.html";

    }

}



// ===============================
// LOGIN SYSTEM
// ===============================


let loginForm=document.getElementById("loginForm");


if(loginForm){


loginForm.addEventListener("submit",function(event){


    event.preventDefault();


    let email=document.getElementById("email").value;

    let password=document.getElementById("password").value;



    if(email && password){


        localStorage.setItem("userEmail",email);


        alert("Login Successful 🎮");


        window.location.href="dashboard.html";


    }


    else{


        alert("Enter all details");

    }



});


}
// ===============================
// SIGNUP SYSTEM
// ===============================

let signupForm = document.getElementById("signupForm");

if(signupForm){

    signupForm.addEventListener("submit", function(event){

        event.preventDefault();


        let username = document.getElementById("username").value;
        let email = document.getElementById("signupEmail").value;
        let password = document.getElementById("signupPassword").value;


        localStorage.setItem("username", username);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("password", password);


        alert("Account Created Successfully 🎮");


        window.location.href="email.html";


    });

}