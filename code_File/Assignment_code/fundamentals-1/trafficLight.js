const prompt = require("prompt-sync")();
let trafficLight = prompt("Enter traffic light: ")

if(trafficLight == "red"){
    console.log("Vehicles must stop. ");
}else if(trafficLight == "orange"){
    console.log("Vehicles must wait. The signal is changing to red or green. ");
}else if(trafficLight == "green"){
    console.log("Vehicles may proceed with caution. ");
}else{
    console.log("Invalid traffic light: ");
}