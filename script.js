
alert("BEFORE");

function setScene() {
    alert("INSIDE SETSCENE");
}

function startMenu() {
    alert("STARTMENU A");

    setScene();

    alert("STARTMENU B");
}

startMenu();

alert("AFTER");
