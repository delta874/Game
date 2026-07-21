let money = 0;

let selectedParts = [];


let orders = [

{
name:"Cybernetic Eye",
parts:["Lens","Processor","Power Cell"],
reward:100
},

{
name:"Neural Headset",
parts:["Processor","Memory Chip","Power Cell"],
reward:150
},

{
name:"Drone Core",
parts:["Processor","Gyroscope","Battery"],
reward:200
}

];


let currentOrder = 0;


function loadOrder(){

let order = orders[currentOrder];


document.getElementById("orderName").innerText =
order.name;


let recipe = document.getElementById("recipe");

recipe.innerHTML="";


order.parts.forEach(part=>{

let item=document.createElement("li");

item.innerText=part;

recipe.appendChild(item);

});


selectedParts=[];

updateSelected();


}


function selectPart(part){

selectedParts.push(part);

updateSelected();

}


function updateSelected(){

let list=document.getElementById("selected");

list.innerHTML="";


selectedParts.forEach(part=>{

let item=document.createElement("li");

item.innerText=part;

list.appendChild(item);

});


}


function build(){

let order=orders[currentOrder];


let correct =
JSON.stringify(selectedParts.sort()) ===
JSON.stringify(order.parts.sort());


if(correct){

money += order.reward;


document.getElementById("money").innerText=money;


document.getElementById("delta").innerText=
"DELTA: Assembly successful. Payment received.";

}

else{


document.getElementById("delta").innerText=
"DELTA: Incorrect components detected.";

}


}


function nextOrder(){

currentOrder++;


if(currentOrder >= orders.length){

currentOrder=0;

}


document.getElementById("delta").innerText=
"DELTA: New order received.";


loadOrder();


}


loadOrder();
