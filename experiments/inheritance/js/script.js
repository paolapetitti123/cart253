/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
"use strict";

let cars = [];
let numCars = 10;

let motorcycles = [];
let numMotor = 10;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600,600);
  for(let i = 0; i < numCars; i++){
    let x = random(0,width);
    let y = random(0, height);
    let car = new Car(x,y);
    cars.push(car);
  }

  for(let i = 0; i < numMotor; i++){
    let x = random(0,width);
    let y = random(0, height);
    let motorcycle = new Motorcycle(x,y);
    motorcycles.push(motorcycle);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  for(let i = 0; i < cars.length; i++){
    let car = cars[i];
    car.move();
    car.wrap();
    car.display();
  }

  for(let i = 0; i < motorcycles.length; i++){
    let motorcycle = motorcycles[i];
    motorcycle.move();
    motorcycle.wrap();
    motorcycle.display();
  }
}
