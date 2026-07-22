function showMessage(text) {
    document.getElementById("message").innerHTML = text;
}


function watchTV() {
    showMessage(
    "EMERGENCY BROADCAST: The Seekers have been reported in your area. Stay indoors."
    );
}


function checkCameras() {
    showMessage(
    "SECURITY ONLINE... Camera feeds loading..."
    );
}


function lookWindow() {
    showMessage(
    "You look outside. The street is quiet..."
    );
}


function checkDoor() {
    showMessage(
    "Door locked. You hear nothing outside."
    );
}
