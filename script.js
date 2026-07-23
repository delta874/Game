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

function checkStatus(){

    let warning = "";


    if(sanity <= 40){

        warning += `
        <p>
        ⚠ WARNING: Your thoughts are becoming unstable.
        </p>
        `;

    }


    if(energy <= 30){

        warning += `
        <p>
        ⚠ WARNING: You are exhausted.
        Your reactions are slower.
        </p>
        `;

    }


    if(seekerActivity >= 70){

        warning += `
        <p>
        ⚠ WARNING: Something is paying attention.
        </p>
        `;

    }


    return warning;

}

// =====================
// STORY DISPLAY SYSTEM
// =====================


function setScene(text, buttons){

    document.getElementById("story").innerHTML = text + checkStatus();


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

    night = 1;

    sanity = 100;
    energy = 100;
    seekerActivity = 20;

    updateMeters();

    lostHopeNight();

}

}




function settings(){

alert("SETTINGS OFFLINE");

}




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
{
text:"END NIGHT",
action:nightTwo
}
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
// NIGHT 5 - THE TRUTH
// =====================


function nightFive(){

night = 5;


setScene(`

<p>
[NIGHT 5]
</p>

<p>
You spend the night going through the files from the attic.
</p>

<p>
The more you read...
the worse it gets.
</p>

<p>
The Seekers have existed for decades.
</p>

<p>
Different towns.
Different people.
Same symbol.
</p>

<p>
But one question remains...
</p>

<p>
Did you discover them?
Or did they want you to find them?
</p>

`,

[

{
text:"INVESTIGATE FILES",
action:investigateFiles
},

{
text:"HIDE THE FILES",
action:hideFiles
}

]

);

}





function investigateFiles(){

changeSanity(-10);

changeEnergy(-10);

changeAwareness(15);


setScene(`

<p>
You continue reading the documents.
</p>

<p>
You find a missing person report.
</p>

<p>
The person reported seeing the same symbol
before disappearing.
</p>

<p>
The last note says:
</p>

<p>
"They do not chase everyone.
Only those who notice."
</p>

`,

[

{
text:"CHECK SECURITY CAMERA",
action:nightFiveCamera
}

]

);

}





function hideFiles(){

changeSanity(5);

changeEnergy(10);

changeAwareness(-5);


setScene(`

<p>
You close the box.
</p>

<p>
Some things are better left unknown.
</p>

<p>
You try to get some rest.
</p>

<p>
But you still feel watched.
</p>

`,

[

{
text:"CHECK SECURITY CAMERA",
action:nightFiveCamera
}

]

);

}





function nightFiveCamera(){

changeEnergy(-5);

changeAwareness(10);


setScene(`

<p>
The security monitor turns on.
</p>

<p>
CAMERA 01: CLEAR
</p>

<p>
CAMERA 02: CLEAR
</p>

<p>
CAMERA 03: ACTIVE
</p>

<p>
Someone is standing outside.
</p>

<p>
They haven't moved.
</p>

`,

[

{
text:"WATCH LONGER",
action:watchLonger
},

{
text:"TURN OFF MONITOR",
action:turnOffMonitor
}

]

);

}





function watchLonger(){

changeSanity(-10);

changeAwareness(10);


setScene(`

<p>
You keep watching.
</p>

<p>
Minutes pass.
</p>

<p>
The person never moves.
</p>

<p>
Then they slowly turn toward the camera.
</p>

<p>
The screen goes black.
</p>

`,

[

{
text:"CONTINUE",
action:nightSix
}

]

);

}





function turnOffMonitor(){

changeSanity(5);

changeAwareness(-5);


setScene(`

<p>
You turn off the monitor.
</p>

<p>
You don't want to know what was outside.
</p>

<p>
But tomorrow night is coming.
</p>

`,

[

{
text:"CONTINUE",
action:nightSix
}

]

);

}

// =====================
// NIGHT 6 - THE SIEGE
// =====================


function nightSix(){

night = 6;


setScene(`

<p>
[NIGHT 6]
</p>

<p>
You know something is coming.
</p>

<p>
The house no longer feels like a home.
</p>

<p>
It feels like a battlefield.
</p>

<p>
You prepare for the final night.
</p>

`,

[

{
text:"SET TRAPS",
action:setTraps
},

{
text:"REST",
action:restBeforeFinal
},

{
text:"WATCH CAMERAS",
action:watchNightSixCameras
}

]

);

}





function setTraps(){

changeEnergy(-20);

changeAwareness(-10);


setScene(`

<p>
You prepare the house.
</p>

<p>
You block entrances and create defenses.
</p>

<p>
It takes hours.
</p>

<p>
You feel exhausted.
</p>

<p>
But you are ready.
</p>

`,

[

{
text:"CONTINUE",
action:nightSixEnd
}

]

);

}





function restBeforeFinal(){

changeEnergy(20);

changeSanity(5);


setScene(`

<p>
You decide to rest.
</p>

<p>
You need your strength.
</p>

<p>
The silence almost feels peaceful.
</p>

<p>
Almost.
</p>

`,

[

{
text:"CONTINUE",
action:nightSixEnd
}

]

);

}





function watchNightSixCameras(){

changeEnergy(-10);

changeAwareness(15);


setScene(`

<p>
You watch the cameras.
</p>

<p>
Every camera is normal.
</p>

<p>
Until suddenly...
</p>

<p>
Every screen shows the same image.
</p>

<p>
Your house.
</p>

<p>
From outside.
</p>

`,

[

{
text:"CONTINUE",
action:nightSixEnd
}

]

);

}





function nightSixEnd(){

setScene(`

<p>
[NIGHT 6 COMPLETE]
</p>

<p>
The power suddenly goes out.
</p>

<p>
The security monitors turn on.
</p>

<p>
The final night has arrived.
</p>

<p>
[NIGHT 7 COMING SOON]
</p>

`,

[

{
text:"BEGIN NIGHT 7",
action:nightSeven
}

]

);

}
// =====================
// NIGHT 7 - THE LAST NIGHT
// =====================


function nightSeven(){

night = 7;


setScene(`

<p>
[NIGHT 7]
</p>

<p>
The power is gone.
</p>

<p>
The house is completely dark.
</p>

<p>
You hear movement outside.
</p>

<p>
You know they are here.
</p>

<p>
Tonight decides everything.
</p>

`,

[

{
text:"CHECK CAMERAS",
action:finalCameras
},

{
text:"HIDE AND WAIT",
action:hideFinal
}

]

);

}





function finalCameras(){

changeEnergy(-10);

changeAwareness(10);

changeSanity(-5);


setScene(`

<p>
You turn on the backup monitor.
</p>

<p>
The cameras flicker.
</p>

<p>
Camera 01:
EMPTY.
</p>

<p>
Camera 02:
EMPTY.
</p>

<p>
Camera 03:
</p>

<p>
A figure is standing at your door.
</p>

`,

[

{
text:"PREPARE DEFENSES",
action:prepareDefense
},

{
text:"TURN OFF MONITOR",
action:turnOffFinalMonitor
}

]

);

}





function hideFinal(){

changeEnergy(10);

changeSanity(5);

changeAwareness(-5);


setScene(`

<p>
You hide in the darkness.
</p>

<p>
You hear footsteps.
</p>

<p>
Slowly moving through the house.
</p>

<p>
You hold your breath.
</p>

`,

[

{
text:"WAIT",
action:finalWait
},

{
text:"RUN",
action:runFinal
}

]

);

}





function prepareDefense(){

changeEnergy(-15);

changeAwareness(-10);


setScene(`

<p>
You prepare everything you can.
</p>

<p>
The doors are secured.
</p>

<p>
The house is ready.
</p>

<p>
Now you wait.
</p>

`,

[

{
text:"FACE THEM",
action:endingCheck
}

]

);

}





function turnOffFinalMonitor(){

changeSanity(5);


setScene(`

<p>
You turn off the monitor.
</p>

<p>
You don't want to see them anymore.
</p>

<p>
The silence is worse.
</p>

`,

[

{
text:"WAIT",
action:finalWait
}

]

);

}





function finalWait(){

changeEnergy(-10);


setScene(`

<p>
Hours pass.
</p>

<p>
The house creaks.
</p>

<p>
A door opens somewhere downstairs.
</p>

<p>
You realize...
</p>

<p>
You can't hide forever.
</p>

`,

[

{
text:"FACE THEM",
action:endingCheck
}

]

);

}





function runFinal(){

changeEnergy(-20);

changeSanity(-10);


setScene(`

<p>
You move through the darkness.
</p>

<p>
Every sound feels closer.
</p>

<p>
You don't know if you are escaping...
</p>

<p>
or walking toward them.
</p>

`,

[

{
text:"CONTINUE",
action:endingCheck
}

]

);

}





// =====================
// ENDING SYSTEM
// =====================


function endingCheck(){


if(sanity < 40){

badDreamEnding();

}

else if(energy < 20 || seekerActivity > 80){

badEnding();

}

else{

goodEnding();

}


}





function badDreamEnding(){

setScene(`

<p>
ENDING: LOST IN THE NIGHT
</p>

<p>
The fear becomes too much.
</p>

<p>
The world around you fades.
</p>

<p>
You wake up somewhere unfamiliar.
</p>

<p>
A hospital room.
</p>

<p>
The truth slowly returns.
</p>

<p>
Was it real?
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





function badEnding(){

setScene(`

<p>
ENDING: THE SEEKERS FOUND YOU
</p>

<p>
You fought until the end.
</p>

<p>
But you were not prepared.
</p>

<p>
The house becomes silent.
</p>

<p>
The Seekers remain.
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





function goodEnding(){

setScene(`

<p>
ENDING: SURVIVOR
</p>

<p>
The sun rises.
</p>

<p>
The house is damaged...
</p>

<p>
but you are still standing.
</p>

<p>
You finally understand The Seekers.
</p>

<p>
And now you know how to stop them.
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

// START GAME

startMenu();
// =====================
// LOST HOPE MODE
// =====================

let lostHopeNightNumber = 1;



function lostHopeNight(){

    lostHopeNightNumber = night;


    setScene(`

    <p>
    LOST HOPE MODE
    </p>

    <p>
    SURVIVAL NIGHT: ${lostHopeNightNumber}
    </p>

    <p>
    The house is silent.
    </p>

    <p>
    You don't know how long you have been here anymore.
    </p>

    <p>
    The Seekers are still outside.
    </p>

    `,

    [

    {
    text:"CHECK CAMERAS",
    action:lostHopeCamera
    },

    {
    text:"REST",
    action:lostHopeRest
    },

    {
    text:"SEARCH HOUSE",
    action:lostHopeSearch
    }

    ]

    );

}





function lostHopeCamera(){

    changeEnergy(-10);

    changeSanity(-5);

    changeAwareness(10);


    setScene(`

    <p>
    You check the security cameras.
    </p>

    <p>
    Camera 1: Clear.
    </p>

    <p>
    Camera 2: Static.
    </p>

    <p>
    Camera 3:
    </p>

    <p>
    Something moved.
    </p>

    `,

    [

    {
    text:"CONTINUE NIGHT",
    action:lostHopeSurvive
    }

    ]

    );

}





function lostHopeRest(){

    changeEnergy(20);

    changeSanity(5);

    changeAwareness(5);


    setScene(`

    <p>
    You try to sleep.
    </p>

    <p>
    For a few minutes...
    everything feels normal.
    </p>

    <p>
    Then you hear footsteps.
    </p>

    `,

    [

    {
    text:"CONTINUE NIGHT",
    action:lostHopeSurvive
    }

    ]

    );

}





function lostHopeSearch(){

    changeEnergy(-15);

    changeSanity(-10);


    let event = Math.floor(Math.random()*3);


    if(event === 0){

        setScene(`

        <p>
        You find old notes about The Seekers.
        </p>

        <p>
        Someone else survived before you.
        </p>

        `,

        [

        {
        text:"CONTINUE NIGHT",
        action:lostHopeSurvive
        }

        ]);

    }

    else{

        setScene(`

        <p>
        You hear something upstairs.
        </p>

        <p>
        You decide to return before it finds you.
        </p>

        `,

        [

        {
        text:"CONTINUE NIGHT",
        action:lostHopeSurvive
        }

        ]);

    }

}





function lostHopeSurvive(){

    night++;


    changeEnergy(-5);

    changeAwareness(5);


    if(sanity <= 0 || energy <= 0 || seekerActivity >= 100){

        lostHopeGameOver();

    }

    else{

        lostHopeNight();

    }

}





function lostHopeGameOver(){


setScene(`

<p>
LOST HOPE TERMINATED
</p>

<p>
YOU SURVIVED:
</p>

<p>
${night} NIGHTS
</p>

<p>
FINAL SANITY:
${sanity}%
</p>

<p>
FINAL ENERGY:
${energy}%
</p>

<p>
FINAL SEEKER ACTIVITY:
${seekerActivity}%
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

// START GAME

startMenu();
