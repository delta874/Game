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



function setScene(text, buttons){


document.getElementById("story").innerHTML=text;


let box=document.getElementById("choices");


box.innerHTML="";



buttons.forEach(choice=>{


let btn=document.createElement("button");


btn.innerHTML=choice.text;


btn.onclick=choice.action;


box.appendChild(btn);



});


}





function changeSanity(amount){

sanity += amount;


if(sanity>100)
sanity=100;


if(sanity<0)
sanity=0;


updateMeters();

}



function changeEnergy(amount){

energy += amount;


if(energy>100)
energy=100;


if(energy<0)
energy=0;


updateMeters();

}



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


night=1;

sanity=100;

energy=100;

seekerActivity=20;


updateMeters();


nightOne();


}




function nightOne(){


setScene(`


<p>
[NIGHT 1]
</p>


<p>
The television plays quietly in the background.
</p>


<p>
A breaking news alert interrupts the program.
</p>


<p>
A group calling themselves "The Seekers"
has been reported in the area.
</p>


<p>
The broadcast ends.
</p>


<p>
A sound comes from your front door.
</p>


`,


[

{
text:"LOCK DOOR",
action:lockDoor
},


{
text:"CHECK CAMERAS",
action:checkCameras
}


]

);


}





function lockDoor(){


changeSanity(-5);


setScene(`


<p>
You rush to the door.
</p>


<p>
You lock the deadbolt.
</p>


<p>
A shadow moves behind the glass.
</p>


<p>
Then silence.
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




function checkCameras(){


changeSanity(-10);

seekerActivity +=10;

changeEnergy(-5);



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


<p>
Something is blocking the view.
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





function nightTwo(){


night=2;


setScene(`


<p>
[NIGHT 2]
</p>


<p>
You survived the first night.
</p>


<p>
But the questions remain.
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

seekerActivity +=10;


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
text:"END DEMO",
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



updateMeters();

startMenu();




