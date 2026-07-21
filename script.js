let money = 0;

let selectedParts = [];

let startTime;


let orders = [

{
    name: "Cybernetic Eye",
    parts: ["Lens", "Processor", "Power Cell"],
    reward: 100
},

{
    name: "Neural Headset",
    parts: ["Processor", "Memory Chip", "Power Cell"],
    reward: 150
},

{
    name: "Drone Core",
    parts: ["Processor", "Gyroscope", "Battery"],
    reward: 200
}

];


let currentOrder = 0;



function loadOrder(){

    let order = orders[currentOrder];

    document.getElementById("orderName").innerText =
    order.name;


    let recipe = document.getElementById("recipe");

    recipe.innerHTML = "";


    order.parts.forEach(part=>{

        let item = document.createElement("li");

        item.innerText = part;

        recipe.appendChild(item);

    });


    selectedParts = [];

    updateSelected();


    startTime = Date.now();


    document.getElementById("delta").innerText =
    "DELTA: Timer started. Begin assembly.";

}



function selectPart(part){

    selectedParts.push(part);

    updateSelected();

}



function updateSelected(){

    let list = document.getElementById("selected");

    list.innerHTML = "";


    selectedParts.forEach(part=>{

        let item = document.createElement("li");

        item.innerText = part;

        list.appendChild(item);

    });

}



function build(){

    let order = orders[currentOrder];


    let correct =
    JSON.stringify(selectedParts.sort()) ===
    JSON.stringify(order.parts.sort());


    if(correct){


        let timeTaken =
        (Date.now() - startTime) / 1000;


        let reward = order.reward;


        if(timeTaken > 20){

            reward = Math.floor(reward * 0.5);

        }

        else if(timeTaken > 10){

            reward = Math.floor(reward * 0.75);

        }


        money += reward;


        document.getElementById("money").innerText =
        money;


        document.getElementById("delta").innerText =
        "DELTA: Assembly complete. Payment: $" + reward;


    }

    else{


        document.getElementById("delta").innerText =
        "DELTA: Incorrect components detected.";


    }

}



function nextOrder(){

    currentOrder++;


    if(currentOrder >= orders.length){

        currentOrder = 0;

    }


    loadOrder();

}



loadOrder();
