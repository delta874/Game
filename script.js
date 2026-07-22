let night = 1;

let sanity = 100;
let energy = 100;
let seekerActivity = 20;



function updateMeters(){

    document.getElementById("sanity").innerHTML =
    "█".repeat(Math.floor(sanity/10)) +
    "░".repeat(10-Math.floor(sanity/10)) +
    " " + sanity + "%";


    document.getElementById("energy").innerHTML =
    "█".repeat(Math.floor(energy/10)) +
    "░".repeat(10-Math.floor(energy/10)) +
    " " + energy + "%";


    document.getElementById("seekers").innerHTML =
    "█".repeat(Math.floor(seekerActivity/10)) +
    "░".repeat(10-Math.floor(seekerActivity/10)) +
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


    buttons.forEach(choice=>{

        let btn = document.createElement("button");

        btn.innerHTML = choice.text;

        btn.onclick = choice.action;

        box.appendChild(btn);

    });

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
You pick up your phone.
</p>

<p>
Two unread messages.
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
You look toward the hallway.
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
You freeze.
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




function checkBackDoor(){

changeSanity(-5);

seekerActivity += 5;


setScene(`

<p>
The back door is unlocked.
</p>

<p>
Cold air enters the house.
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




function checkMachine(){

changeSanity(-5);


setScene(`

<p>
The coffee machine looks normal.
</p>

<p>
But the coffee is already finished.
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
Authorities are investigating reports of a group known as "The Seekers."
</p>

<p>
Residents are advised to remain indoors.
</p>

<p>
The broadcast ends.
</p>

<p>
The house becomes silent.
</p>

`,

[

{
text:"CHECK DOOR",
action:doorEvent
},

{
text:"CHECK CAMERAS",
action:checkCameras
}

]

);

}




function doorEvent(){

changeSanity(-10);

seekerActivity += 10;


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
},

{
text:"LOOK THROUGH PEEPHOLE",
action:peephole
}

]

);

}




function lockDoor(){

setScene(`

<p>
You lock the deadbolt.
</p>

<p>
The person outside stops moving.
</p>

<p>
After a few seconds, footsteps disappear.
</p>

`,

[

{
text:"CHECK CAMERAS",
action:checkCameras
}

]

);

}




function peephole(){

changeSanity(-15);


setScene(`

<p>
You look through the peephole.
</p>

<p>
Nobody is there.
</p>

<p>
Then a shadow moves across the hallway.
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





function checkCameras(){

changeSanity(-10);

seekerActivity += 10;


setScene(`

<p>
SECURITY SYSTEM CONNECTED.
</p>

<p>
Camera 01: CLEAR.
</p>

<p>
Camera 02: CLEAR.
</p>

<p>
Camera 03: SIGNAL ERROR.
</p>

`,

[

{
text:"CONTINUE TO NIGHT 2",
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
You survived the first night.
</p>

<p>
But something is different.
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


setScene(`

<p>
[UNKNOWN SIGNAL]
</p>

<p>
"The Seekers are not searching for people."
</p>

<p>
"They are searching for something hidden."
</p>

<p>
The signal cuts out.
</p>

`,

[

{
text:"END NIGHT",
action:startGame
}

]

);

}




updateMeters();
startGame();

