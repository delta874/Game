let night = 1;


function setScene(text, buttons){


document.getElementById("story").innerHTML = text;


let choiceBox = document.getElementById("choices");


choiceBox.innerHTML = "";


buttons.forEach(button => {


let btn = document.createElement("button");


btn.innerHTML = button.text;


btn.onclick = button.action;


choiceBox.appendChild(btn);


});


}



function startGame(){


setScene(`

<p>
[EMERGENCY BROADCAST]
</p>


<p>
Reports indicate members of a cult known as
"The Seekers" have been sighted throughout the county.
</p>


<p>
Residents are advised to remain indoors.
</p>


<p>
As the broadcast ends, you hear someone picking your door lock.
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


setScene(`


<p>
You slam the deadbolt shut.
</p>


<p>
A gasp comes from the other side.
</p>


<p>
Footsteps quickly disappear into the night.
</p>


`,


[

{
text:"CHECK CAMERAS",
action:checkCameras
},


{
text:"LOOK OUT WINDOW",
action:windowCheck
}

]


);


}



function checkCameras(){


setScene(`


<p>
SECURITY CAMERA FEED CONNECTED.
</p>


<p>
Camera 03 shows someone standing near your window.
</p>


<p>
The image glitches.
</p>


`,


[

{
text:"LOCK WINDOW",
action:lockWindow
},


{
text:"WATCH CAMERA",
action:watchCamera
}

]


);


}



function windowCheck(){


setScene(`


<p>
You slowly approach the window.
</p>


<p>
Something moves outside.
</p>


`,


[

{
text:"LOOK OUTSIDE",
action:badChoice
},


{
text:"STEP AWAY",
action:checkCameras
}

]


);


}



function lockWindow(){


setScene(`


<p>
You lock the window.
</p>


<p>
The figure outside disappears.
</p>


`,


[

{
text:"CONTINUE",
action:nightComplete
}

]


);


}



function watchCamera(){


setScene(`


<p>
The camera freezes.
</p>


<p>
A message appears:
</p>


<p>
"WE KNOW YOU ARE WATCHING."
</p>


`,


[

{
text:"CONTINUE",
action:nightComplete
}

]


);


}



function badChoice(){


setScene(`


<p>
The window is empty.
</p>


<p>
But your reflection is smiling.
</p>


`,


[

{
text:"RESTART NIGHT",
action:startGame
}

]


);


}



function nightComplete(){


setScene(`


<p>
NIGHT 1 COMPLETE.
</p>


<p>
The sun begins to rise.
</p>


`,


[

{
text:"NEXT NIGHT",
action:nextNight
}

]


);


}



function nextNight(){


night++;


document.querySelector(".system-info").innerHTML =

`
DATE: 11/01/1998
<br>
TIME: 12:00 AM
<br>
NIGHT: ${night}
`;


startGame();


}



startGame();


