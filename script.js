let money = 0;

function buildItem(){

    let lens =
    document.getElementById("lens").checked;

    let processor =
    document.getElementById("processor").checked;

    let power =
    document.getElementById("power").checked;

    if(lens && processor && power){

        money += 100;

        document.getElementById("money").innerText = money;

        document.getElementById("message").innerText =
        "DELTA: Assembly successful. Payment received.";

    }
    else{

        document.getElementById("message").innerText =
        "DELTA: Assembly failed. Check components.";

    }

}
