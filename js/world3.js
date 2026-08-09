// ========================================
// WORLD 3 - ADVANCED CODING BATTLES
// ========================================


// ================= VARIABLES =================

let currentBattle = 1;

let world3XP =
    Number(localStorage.getItem("world3XP")) || 0;

let world3Coins =
    Number(localStorage.getItem("world3Coins")) || 0;


// ================= SHOW STATS =================

document.getElementById("xp").innerHTML =
    world3XP;

document.getElementById("coins").innerHTML =
    world3Coins;


// ================= INITIAL LOCK STATE =================

// Battle 1 = UNLOCKED

document.getElementById("battle1")
    .classList.remove("locked");


// Battle 2 = LOCKED

document.getElementById("battle2")
    .classList.add("locked");

document.getElementById("battle2Btn").disabled =
    true;

document.getElementById("battle2Btn").innerHTML =
    "🔒 Locked";


// Battle 3 = LOCKED

document.getElementById("battle3")
    .classList.add("locked");

document.getElementById("battle3Btn").disabled =
    true;

document.getElementById("battle3Btn").innerHTML =
    "🔒 Locked";


// Final Boss = LOCKED

document.getElementById("bossBattle")
    .classList.add("locked");

document.getElementById("bossBtn").disabled =
    true;

document.getElementById("bossBtn").innerHTML =
    "🔒 Locked";


// ================= START BATTLE =================

function startBattle(battleNumber) {

    currentBattle = battleNumber;

    document.getElementById("battleBox")
        .style.display = "block";

    document.getElementById("result").innerHTML = "";

    document.getElementById("answer").value = "";


    // ================= BATTLE 1 =================

    if (battleNumber === 1) {

        document.getElementById("battleTitle").innerHTML =
            "⚔️ Battle 1 - Advanced Function";

        document.getElementById("question").innerHTML =

            `
            Create a function called
            <b>calculateDamage()</b>.

            <br><br>

            The function must accept a parameter
            <b>power</b>.

            <br><br>

            Return <b>power * 2</b>.

            <br><br>

            💻 Write the JavaScript code.
            `;

    }


    // ================= BATTLE 2 =================

    else if (battleNumber === 2) {

        document.getElementById("battleTitle").innerHTML =
            "👾 Battle 2 - Array Challenge";

        document.getElementById("question").innerHTML =

            `
            Create an array called
            <b>heroes</b>.

            <br><br>

            Store:

            <br><br>

            "Hero", "Mage", "Warrior"

            <br><br>

            Then use a <b>for loop</b>
            to print every hero.

            <br><br>

            💻 Write the JavaScript code.
            `;

    }


    // ================= BATTLE 3 =================

    else if (battleNumber === 3) {

        document.getElementById("battleTitle").innerHTML =
            "🧩 Battle 3 - Object Power";

        document.getElementById("question").innerHTML =

            `
            Create an object called
            <b>boss</b>.

            <br><br>

            It must contain:

            <br><br>

            name → "Dragon"

            <br>

            level → 50

            <br>

            power → 500

            <br><br>

            💻 Write the JavaScript object.
            `;

    }


    // ================= FINAL BOSS =================

    else if (battleNumber === 4) {

        document.getElementById("battleTitle").innerHTML =
            "👑 FINAL BOSS - Code Master";

        document.getElementById("question").innerHTML =

            `
            Create a function called
            <b>finalAttack()</b>.

            <br><br>

            The function must accept
            <b>power</b>.

            <br><br>

            Return <b>power * 10</b>.

            <br><br>

            💀 Defeat the Final Boss!
            `;

    }


    document.getElementById("message").innerHTML =
        "⚔️ Battle started! Defeat the challenge, Hero!";

}


// ================= CHECK BATTLE =================

function checkBattle() {

    let answer = document
        .getElementById("answer")
        .value
        .toLowerCase()
        .replace(/\s/g, "");


    // ================= BATTLE 1 =================

    if (currentBattle === 1) {

        if (
            answer.includes(
                "functioncalculatedamage(power)"
            ) &&
            answer.includes(
                "returnpower*2"
            )
        ) {

            battleComplete(
                "⚔️ Battle 1 Defeated! 🎉"
            );

        }

        else {

            battleFailed(
                "🤖 Byte Hint: Create calculateDamage(power) and return power * 2."
            );

        }

    }


    // ================= BATTLE 2 =================

    else if (currentBattle === 2) {

        if (
            answer.includes(
                'letheroes=["hero","mage","warrior"]'
            ) &&
            answer.includes("for(") &&
            answer.includes("console.log")
        ) {

            battleComplete(
                "👾 Battle 2 Defeated! 🎉"
            );

        }

        else {

            battleFailed(
                "🤖 Byte Hint: Create the heroes array and use a for loop with console.log()."
            );

        }

    }


    // ================= BATTLE 3 =================

    else if (currentBattle === 3) {

        if (
            answer.includes("letboss=") &&
            answer.includes('name:"dragon"') &&
            answer.includes("level:50") &&
            answer.includes("power:500")
        ) {

            battleComplete(
                "🧩 Battle 3 Defeated! 🎉"
            );

        }

        else {

            battleFailed(
                "🤖 Byte Hint: Create boss with name, level and power."
            );

        }

    }


    // ================= FINAL BOSS =================

    else if (currentBattle === 4) {

        if (
            answer.includes(
                "functionfinalattack(power)"
            ) &&
            answer.includes(
                "returnpower*10"
            )
        ) {

            document.getElementById("result").innerHTML =
                "👑 FINAL BOSS DEFEATED! 🎉";

            document.getElementById("message").innerHTML =
                "🏆 WORLD 3 COMPLETED! You are a Code Master!";


            // World 3 rewards

            world3XP += 100;

            world3Coins += 50;


            // Main XP & Coins

            let totalXP =
                Number(localStorage.getItem("xp")) || 0;

            let totalCoins =
                Number(localStorage.getItem("coins")) || 0;


            totalXP += 100;

            totalCoins += 50;


            localStorage.setItem(
                "xp",
                totalXP
            );

            localStorage.setItem(
                "coins",
                totalCoins
            );


            // World 3 XP & Coins

            localStorage.setItem(
                "world3XP",
                world3XP
            );

            localStorage.setItem(
                "world3Coins",
                world3Coins
            );


            // World 3 completed

            localStorage.setItem(
                "World3Completed",
                "true"
            );


            // Victory Screen

            setTimeout(function() {

                window.location.href =
                    "world3-victory.html";

            }, 1500);

        }

        else {

            battleFailed(
                "🤖 Byte Hint: Create finalAttack(power) and return power * 10."
            );

        }

    }

}


// ================= BATTLE COMPLETE =================

function battleComplete(message) {

    document.getElementById("result").innerHTML =
        message;

    document.getElementById("message").innerHTML =
        "🤖 Byte: Excellent work, Hero! 🔥";


    // Reward

    world3XP += 40;

    world3Coins += 20;


    // Main XP & Coins

    let totalXP =
        Number(localStorage.getItem("xp")) || 0;

    let totalCoins =
        Number(localStorage.getItem("coins")) || 0;


    totalXP += 40;

    totalCoins += 20;


    localStorage.setItem(
        "xp",
        totalXP
    );

    localStorage.setItem(
        "coins",
        totalCoins
    );


    // World 3 rewards

    localStorage.setItem(
        "world3XP",
        world3XP
    );

    localStorage.setItem(
        "world3Coins",
        world3Coins
    );


    // Update screen

    document.getElementById("xp").innerHTML =
        world3XP;

    document.getElementById("coins").innerHTML =
        world3Coins;


    // ================= UNLOCK BATTLE 2 =================

    if (currentBattle === 1) {

        currentBattle = 2;

        let button =
            document.getElementById("battle2Btn");

        document.getElementById("battle2")
            .classList.remove("locked");

        button.disabled = false;

        button.innerHTML =
            "⚔️ Enter Battle";

        button.onclick = function() {

            startBattle(2);

        };

    }


    // ================= UNLOCK BATTLE 3 =================

    else if (currentBattle === 2) {

        currentBattle = 3;

        let button =
            document.getElementById("battle3Btn");

        document.getElementById("battle3")
            .classList.remove("locked");

        button.disabled = false;

        button.innerHTML =
            "⚔️ Enter Battle";

        button.onclick = function() {

            startBattle(3);

        };

    }


    // ================= UNLOCK FINAL BOSS =================

    else if (currentBattle === 3) {

        currentBattle = 4;

        let button =
            document.getElementById("bossBtn");

        document.getElementById("bossBattle")
            .classList.remove("locked");

        button.disabled = false;

        button.innerHTML =
            "👑 Enter Final Boss";

        button.onclick = function() {

            startBattle(4);

        };

    }

}


// ================= BATTLE FAILED =================

function battleFailed(hint) {

    document.getElementById("result").innerHTML =
        "❌ Battle Failed!";

    document.getElementById("message").innerHTML =
        hint;

}

