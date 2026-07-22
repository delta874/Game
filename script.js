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



// =====================
// BUFFS / DEBUFFS
// =====================


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
// STORY DISPLAY SYSTEM
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

<p>
ALL SYSTEMS ONLINE.
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
// MENU OPTIONS
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



// Start game menu

startMenu();

// =====================
// NIGHT 1
// =====================


function nightOne(){

night = 1;


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

changeSanity(10);


setScene(`

<p>
You check your phone.
</p>

<p>
You have a message from your family.
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
The message makes you feel a little better.
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
You make yourself coffee.
</p>

<p>
The house is completely quiet.
</p>

<p>
Almost too quiet.
</p>

`,

[

{
text:"CHECK THE COFFEE MACHINE",
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
You look at the coffee machine.
</p>

<p>
The machine is off.
</p>

<p>
But the coffee cup is already filled.
</p>

<p>
You don't remember making it.
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
You are sure you locked it earlier.
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
Reports indicate that members of a group known as
"The Seekers" have been sighted throughout the county.
</p>

<p>
Residents are advised to remain indoors.
</p>

<p>
The broadcast suddenly glitches.
</p>

`,

[

{
text:"CHECK THE DOOR",
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
You freeze.
</p>

`,

[

{
text:"LOCK THE DOOR",
action:lockDoor
},

{
text:"LOOK THROUGH PEEPHOLE",
action:peephole
}

]

);

}





function peephole(){

changeSanity(-15);

changeAwareness(15);


setScene(`

<p>
You slowly look through the peephole.
</p>

<p>
Nobody is there.
</p>

<p>
Then you notice something.
</p>

<p>
The porch light is off.
</p>

<p>
You never turned it off.
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
You sit awake until morning.
</p>

<p>
Something about tonight felt wrong.
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
The events from last night keep replaying in your mind.
</p>

<p>
The television suddenly turns on.
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
This is not a normal broadcast.
</p>

<p>
The screen shows old footage.
</p>

<p>
A voice speaks:
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
text:"TURN OFF TV",
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
You turn the television off.
</p>

<p>
The silence feels better.
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
You slowly look through the blinds.
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
Whatever is outside can wait.
</p>

<p>
You try to calm down.
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
The third camera feed appears.
</p>

<p>
It shows your hallway.
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
You stare at the monitor.
</p>

<p>
A shadow moves across the hallway.
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
// NIGHT 3 - THE OUTSIDE
// =====================


function nightThree(){

night = 3;


setScene(`

<p>
[NIGHT 3]
</p>

<p>
You haven't stepped outside in days.
</p>

<p>
The house feels smaller every hour.
</p>

<p>
You need fresh air.
</p>

`,

[

{
text:"GO OUTSIDE",
action:goOutside
},

{
text:"STAY INSIDE",
action:stayInside
}

]

);

}





function goOutside(){

changeEnergy(-15);

changeSanity(-5);

changeAwareness(15);


setScene(`

<p>
You slowly open the front door.
</p>

<p>
The street is empty.
</p>

<p>
No cars.
No neighbors.
</p>

<p>
Nothing.
</p>

`,

[

{
text:"EXPLORE STREET",
action:exploreStreet
},

{
text:"RETURN HOME",
action:returnInside
}

]

);

}





function stayInside(){

changeEnergy(10);

changeAwareness(-5);


setScene(`

<p>
You decide staying inside is safer.
</p>

<p>
You sit quietly.
</p>

<p>
Then you hear three knocks.
</p>

`,

[

{
text:"CHECK WINDOW",
action:windowCheck
},

{
text:"IGNORE KNOCKS",
action:ignoreKnocks
}

]

);

}





function exploreStreet(){

changeEnergy(-10);

changeSanity(-10);

changeAwareness(10);


setScene(`

<p>
You walk down the street.
</p>

<p>
The neighborhood feels abandoned.
</p>

<p>
On a nearby wall you see a strange symbol.
</p>

<p>
It matches the symbol from the broadcasts.
</p>

`,

[

{
text:"TOUCH SYMBOL",
action:touchSymbol
},

{
text:"RETURN HOME",
action:returnInside
}

]

);

}





function touchSymbol(){

changeSanity(-15);

changeAwareness(10);


setScene(`

<p>
The moment you touch the symbol...
</p>

<p>
Your phone turns on.
</p>

<p>
UNKNOWN:
"We know you see us."
</p>

`,

[

{
text:"RUN HOME",
action:returnInside
}

]

);

}


// =====================
// NIGHT 3 CONTINUED
// =====================


function returnInside(){

changeEnergy(-5);


setScene(`

<p>
You rush back inside.
</p>

<p>
You lock every door and window.
</p>

<p>
But you can't stop thinking...
</p>

<p>
Someone was watching you.
</p>

`,

[

{
text:"CONTINUE",
action:nightFour
}

]

);

}





function windowCheck(){

changeSanity(-10);

changeAwareness(5);


setScene(`

<p>
You slowly look outside.
</p>

<p>
Nobody is there.
</p>

<p>
But something catches your attention.
</p>

<p>
There is a footprint right below your window.
</p>

`,

[

{
text:"LOCK WINDOW",
action:lockWindow
}

]

);

}





function ignoreKnocks(){

changeSanity(5);

changeAwareness(-5);


setScene(`

<p>
You ignore the knocking.
</p>

<p>
After a few minutes it stops.
</p>

<p>
You hope you made the right choice.
</p>

`,

[

{
text:"CONTINUE",
action:nightFour
}

]

);

}





function lockWindow(){

changeAwareness(-5);


setScene(`

<p>
You lock the window.
</p>

<p>
The house feels slightly safer.
</p>

`,

[

{
text:"CONTINUE",
action:nightFour
}

]

);

}





// =====================
// NIGHT 4 - THE ATTIC
// =====================


function nightFour(){

night = 4;


setScene(`

<p>
[NIGHT 4]
</p>

<p>
You can't keep waiting anymore.
</p>

<p>
The Seekers know something about you.
</p>

<p>
You decide to search the house for answers.
</p>

`,

[

{
text:"SEARCH ATTIC",
action:searchAttic
},

{
text:"REST",
action:restNightFour
}

]

);

}





function searchAttic(){

changeEnergy(-10);

changeSanity(-5);

changeAwareness(10);


setScene(`

<p>
You climb into the attic.
</p>

<p>
Dust covers everything.
</p>

<p>
Old photos and forgotten belongings fill the room.
</p>

<p>
Behind an old picture frame, you find a locked box.
</p>

`,

[

{
text:"OPEN BOX",
action:openBox
},

{
text:"LEAVE IT",
action:leaveBox
}

]

);

}





function restNightFour(){

changeEnergy(20);

changeSanity(5);

changeAwareness(-5);


setScene(`

<p>
You decide to rest.
</p>

<p>
For a moment, everything feels normal.
</p>

<p>
Almost.
</p>

`,

[

{
text:"CONTINUE",
action:nightFive
}

]

);

}





function openBox(){

changeSanity(-10);

changeAwareness(10);


setScene(`

<p>
You slowly open the box.
</p>

<p>
Inside are newspaper clippings,
photos, and handwritten notes.
</p>

<p>
The articles describe disappearances
and sightings of the same symbol.
</p>

<p>
One note stands out:
</p>

<p>
"THE SEEKERS DO NOT HUNT RANDOMLY.
THEY WATCH THOSE WHO NOTICE THEM."
</p>

<p>
You realize something disturbing.
</p>

<p>
Every time you searched for them...
they may have been searching for you.
</p>

`,

[

{
text:"READ MORE NOTES",
action:readNotes
},

{
text:"CLOSE BOX",
action:leaveBox
}

]

);

}





function readNotes(){

changeSanity(-5);

changeAwareness(5);


setScene(`

<p>
The notes are decades old.
</p>

<p>
Different towns.
Different houses.
Same symbol.
Same group.
</p>

<p>
A final message is written:
</p>

<p>
"They are not looking for a place.
They are looking for a person."
</p>

<p>
A noise comes from downstairs.
</p>

`,

[

{
text:"CHECK DOWNSTAIRS",
action:checkDownstairs
},

{
text:"STAY QUIET",
action:stayQuiet
}

]

);

}





function leaveBox(){

changeSanity(5);

changeAwareness(-5);


setScene(`

<p>
You close the box.
</p>

<p>
Some answers might be better left hidden.
</p>

`,

[

{
text:"CONTINUE",
action:nightFive
}

]

);

}





function checkDownstairs(){

changeEnergy(-5);

changeAwareness(10);


setScene(`

<p>
You slowly walk downstairs.
</p>

<p>
Nobody is there.
</p>

<p>
But the front door is open.
</p>

<p>
You know you locked it.
</p>

`,

[

{
text:"CONTINUE",
action:nightFive
}

]

);

}





function stayQuiet(){

changeSanity(5);

changeAwareness(-5);


setScene(`

<p>
You stay completely still.
</p>

<p>
After several minutes,
the noise stops.
</p>

`,

[

{
text:"CONTINUE",
action:nightFive
}

]

);

}





// =====================
// NIGHT 5 PLACEHOLDER
// =====================


function nightFive(){

night = 5;


setScene(`

<p>
[NIGHT 5]
</p>

<p>
The information you found changes everything.
</p>

<p>
The Seekers are not just nearby...
</p>

<p>
They have been watching for years.
</p>

<p>
NIGHT 5 COMING SOON...
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
