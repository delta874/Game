let night = 1;

let sanity = 100;
let energy = 100;
let seekerActivity = 20;



function updateMeters(){

    document.getElementById("sanity").innerHTML =
    "█".repeat(Math.floor(sanity/10)) +
    "░".repeat(10 - Math.floor(sanity/10)) +
    " " + sanity + "%";


    document.getElementById("energy").innerHTML =
    "█".repeat(Math.floor(energy/10)) +
    "░".repeat(10 - Math.floor(energy/10)) +
    " " + energy + "%";


    document.getElementById("seekers").innerHTML =
    "█".repeat(Math.floor(seekerActivity/10)) +
    "░".repeat(10 - Math.floor(seekerActivity/10)) +
    " " + seekerActivity + "%";

}




function changeSanity(amount){

    sanity += amount;

    if(sanity > 100) sanity = 100;
    if(sanity < 0) sanity = 0;

    updateMeters();

}




function changeEnergy(amount){

    energy += amount;

    if(energy > 100) energy = 100;
    if(energy < 0) energy = 0;

    updateMeters();

}




function setScene(text, buttons){

    document.getElementById("story").innerHTML = text;


    let box = document.getElementById("choices");

    box.innerHTML = "";


    buttons.forEach(choice => {

        let button = document.createElement("button");

        button.innerHTML = choice.text;

        button.onclick = choice.action;

        box.appendChild(button);

    });

}





// MAIN MENU

function startMenu(){

setScene(`

<p>
WELCOME TO THE SEEKER SECURITY TERMINAL
</p>

<p>
SYSTEM READY.
</p>

`,

[

{
text:"START NEW GAME",
action:startGame
},

{
text:"CONTINUE",
action:continueGame
},

{
text:"LOST HOPE",
action:lostHope
},

{
text:"SETTINGS",
action:settings
}

]

);

}






function startGame(){

night = 1;

sanity = 100;

energy = 100;

seekerActivity = 20;


updateMeters();


nightOne();

}




// NIGHT 1

function nightOne(){

setScene(`

<p>
[NIGHT 1 - 10/31/1998]
</p>

<p>
You wake up on the couch.
</p>

<p>
The television is still playing quietly.
</p>

<p>
The clock reads 11:02 PM.
</p>

<p>
For a moment, everything feels normal.
</p>

`,

[

{
text:"CHECK PHONE",
action:checkPhone
},

{
text:"MAKE COFFEE",
action:makeCoffee
}

]

);

}




function checkPhone(){

changeSanity(-2);


setScene(`

<p>
You check your phone.
</p>

<p>
MOM:
"Hey, just checking in. Let me know you're okay."
</p>

<p>
DAD:
"Remember to lock the back door."
</p>

`,

[

{
text:"CHECK BACK DOOR",
action:checkBackDoor
},

{
text:"MAKE COFFEE",
action:makeCoffee
}

]

);

}




function makeCoffee(){

changeEnergy(5);


setScene(`

<p>
You walk into the kitchen.
</p>

<p>
The coffee machine turns on.
</p>

<p>
You never pressed the button.
</p>

`,

[

{
text:"WATCH TV",
action:watchTV
}

]

);

}





function checkBackDoor(){

changeSanity(-5);

seekerActivity += 5;

updateMeters();


setScene(`

<p>
The back door is unlocked.
</p>

<p>
You quickly lock it.
</p>

`,

[

{
text:"WATCH TV",
action:watchTV
}

]

);

}




function watchTV(){

setScene(`

<p>
[EMERGENCY BROADCAST]
</p>

<p>
Reports indicate a group known as
"The Seekers" has been sighted nearby.
</p>

<p>
Residents are advised to remain indoors.
</p>

`,

[

{
text:"CHECK DOOR",
action:doorEvent
}

]

);

}





function doorEvent(){

changeSanity(-10);

seekerActivity += 10;

updateMeters();


setScene(`

<p>
You hear metal scraping.
</p>

<p>
Someone is trying the front door.
</p>

`,

[

{
text:"LOCK DOOR",
action:lockDoor
}

]

);

}




function lockDoor(){

setScene(`

<p>
You lock the door.
</p>

<p>
The footsteps outside slowly disappear.
</p>

`,

[

{
text:"END NIGHT",
action:nightTwo

}

]

);

}




// NIGHT 2

function nightTwo(){

night = 2;


setScene(`

<p>
[NIGHT 2]
</p>

<p>
You survived the first night.
</p>

<p>
But now you need answers.
</p>

<p>
The television turns on by itself.
</p>

`,

[

{
text:"WATCH BROADCAST",
action:nightTwoBroadcast
}

]

);

}





function nightTwoBroadcast(){

changeSanity(-5);

seekerActivity += 10;

updateMeters();


setScene(`

<p>
[UNKNOWN SIGNAL]
</p>

<p>
"The Seekers are looking for something."
</p>

<p>
"The question is... what?"
</p>

`,

[

{
text:"RETURN TO MENU",
action:startMenu
}

]

);

}





function continueGame(){

alert("NO SAVE DATA FOUND");

}



function lostHope(){

alert("LOST HOPE MODE COMING SOON");

}



function settings(){

alert("SETTINGS OFFLINE");

}




// LOAD MENU

startMenu();

