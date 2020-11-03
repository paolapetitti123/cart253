/**************************************************
Template p5 project
Paola petitti

Here is a description of this template p5 project.
**************************************************/
"use strict";

let vehicles = [];
let numCars = 10;
let numMotor = 10;
let numSportCars = 3;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600,600);
  for(let i = 0; i < numCars; i++){
    let x = random(0,width);
    let y = random(0, height);
    let car = new Car(x,y);
    vehicles.push(car);
  }

  for(let i = 0; i < numSportCars; i++){
    let x = random(0,width);
    let y = random(0, height);
    let sportsCar = new SportsCar(x,y);
    vehicles.push(sportsCar);
  }

  for(let i = 0; i < numMotor; i++){
    let x = random(0,width);
    let y = random(0, height);
    let motorcycle = new Motorcycle(x,y);
    vehicles.push(motorcycle);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  for(let i = 0; i < vehicles.length; i++){
    let vehicle = vehicles[i];
    vehicle.move();
    vehicle.wrap();
    vehicle.display();
  }

}
