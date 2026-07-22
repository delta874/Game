let night = 1;

let sanity = 100;
let energy = 100;
let seekerActivity = 20;


// =====================
// METERS
// =====================


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



function changeAwareness(amount){

    seekerActivity += amount;

    if(seekerActivity > 100) seekerActivity = 100;
    if(seekerActivity < 0) seekerActivity = 0;

    updateMeters();

}



// =====================
// SCENE SYSTEM
// =====================


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



// =====================
// MAIN MENU
// =====================


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




// =====================
// NIGHT 1
// =====================


function nightOne(){

setScene(`

<p>
[NIGHT 1 - 10/31/1998]
</p>

<p>
You wake up on the couch.
</p>

<p>
The television is playing quietly.
</p>

<p>
The clock reads 11:02 PM.
</p>

<p>
For a moment everything feels normal.
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

changeSanity(10);


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

<p>
You stare at the message for a moment.
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

changeEnergy(10);

changeSanity(5);


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
text:"CHECK MACHINE",
action:checkMachine
},

{
text:"WATCH TV",
action:watchTV
}

]

);

}





function checkMachine(){

changeSanity(-5);


setScene(`

<p>
The machine looks normal.
</p>

<p>
But the coffee is already made.
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

changeAwareness(5);


setScene(`

<p>
You walk toward the back door.
</p>

<p>
The lock is open.
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

// =====================
// NIGHT 1 CONTINUED
// =====================


function watchTV(){

setScene(`

<p>
[EMERGENCY BROADCAST]
</p>

<p>
Reports indicate a group known as
"The Seekers" has been sighted throughout the county.
</p>

<p>
Residents are advised to remain indoors.
</p>

<p>
The broadcast suddenly cuts to static.
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

changeAwareness(10);


setScene(`

<p>
You hear metal scraping.
</p>

<p>
Someone is trying the front door.
</p>

<p>
Your heart starts racing.
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

changeAwareness(-5);


setScene(`

<p>
You lock the door.
</p>

<p>
The footsteps outside slowly disappear.
</p>

<p>
You don't sleep much after that.
</p>

`,

[

{
text:"CONTINUE",
action:nightTwo
}

]

);

}





// =====================
// NIGHT 2
// =====================


function nightTwo(){

night = 2;


setScene(`

<p>
[NIGHT 2]
</p>

<p>
You barely slept.
</p>

<p>
The house feels different tonight.
</p>

<p>
The television turns on by itself.
</p>

<p>
Static fills the room.
</p>

`,

[

{
text:"WATCH SIGNAL",
action:watchSignal
},

{
text:"TURN OFF TV",
action:turnOffTV
}

]

);

}




function watchSignal(){

changeSanity(-10);

changeAwareness(10);


setScene(`

<p>
[UNKNOWN SIGNAL]
</p>

<p>
The broadcast is not news.
</p>

<p>
It is an old recording.
</p>

<p>
A voice says:
</p>

<p>
"If you can see this, they already know where you are."
</p>

`,

[

{
text:"CHECK CAMERAS",
action:cameraCheck
},

{
text:"TURN IT OFF",
action:turnOffTV
}

]

);

}




function turnOffTV(){

changeSanity(5);

changeAwareness(-5);


setScene(`

<p>
You turn off the television.
</p>

<p>
The room becomes silent.
</p>

<p>
For a moment, you feel safe.
</p>

<p>
Then you hear something outside.
</p>

`,

[

{
text:"LOOK OUT WINDOW",
action:lookWindow
},

{
text:"IGNORE IT",
action:ignoreNoise
}

]

);

}




function lookWindow(){

changeSanity(-5);

changeAwareness(5);


setScene(`

<p>
You slowly look outside.
</p>

<p>
A person is standing across the street.
</p>

<p>
They are completely still.
</p>

<p>
You blink.
</p>

<p>
They are gone.
</p>

`,

[

{
text:"CHECK CAMERAS",
action:cameraCheck
}

]

);

}





function ignoreNoise(){

changeSanity(5);

changeAwareness(-5);


setScene(`

<p>
You decide not to look.
</p>

<p>
Whatever is outside can stay outside.
</p>

<p>
You try to rest.
</p>

`,

[

{
text:"CHECK CAMERAS",
action:cameraCheck
}

]

);

}





function cameraCheck(){

changeEnergy(-5);


setScene(`

<p>
SECURITY SYSTEM CONNECTED
</p>

<p>
CAMERA 01: CLEAR
</p>

<p>
CAMERA 02: CLEAR
</p>

<p>
CAMERA 03: ONLINE
</p>

<p>
The camera feed appears.
</p>

<p>
It is showing your hallway.
</p>

<p>
You never installed a hallway camera.
</p>

`,

[

{
text:"CONTINUE",
action:nightTwoEnd
}

]

);

}





function nightTwoEnd(){

setScene(`

<p>
You stare at the screen.
</p>

<p>
A shadow moves past the camera.
</p>

<p>
The feed cuts to black.
</p>

<p>
[NIGHT 2 COMPLETE]
</p>

`,

[

{
text:"BEGIN NIGHT 3",
action:nightThree
}

]

);

}





// =====================
// NIGHT 3 PLACEHOLDER
// =====================


function nightThree(){

setScene(`

<p>
[NIGHT 3]
</p>

<p>
The outside world has been silent for days.
</p>

<p>
You decide you cannot stay trapped forever.
</p>

<p>
COMING SOON...
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





// =====================
// OTHER MENU OPTIONS
// =====================


function continueGame(){

alert("NO SAVE DATA FOUND");

}



function lostHope(){

alert("LOST HOPE MODE COMING SOON");

}



function settings(){

alert("SETTINGS OFFLINE");

}



// START

startMenu();

