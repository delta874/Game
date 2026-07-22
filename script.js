function showMessage(text) {
    document.getElementById("message").innerHTML = text;
}


function watchTV() {
    showMessage(
    "EMERGENCY BROADCAST: The Seekers have been reported nearby. Stay indoors and lock all doors."
    );
}


function checkCameras() {
    showMessage(
    "SECURITY SYSTEM ONLINE... Searching camera feeds..."
    );
}


function lookWindow() {
    showMessage(
    "You look outside. The street is empty. Something feels wrong..."
    );
}


function checkDoor() {
    showMessage(
    "Door locked. You hear a strange noise outside."
    );
}
