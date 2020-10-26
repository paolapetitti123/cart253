/**************************************************
Intro to object oriented programming
Paola Petitti

Following along the videos!
**************************************************/
"use strict";

// Our garden
let garden = {
  // An array to store the individual flowers
  flowers: [],
  // How many flowers in the garden
  numFlowers: 20,
  // The color of the grass (background)
  grassColor: {
    r: 120,
    g: 180,
    b: 120
  }
};

// setup() creates the canvas and the flowers in the garden
function setup() {
  createCanvas(600, 600);

  // Create our flowers by counting up to the number of the flowers
  for (let i = 0; i < garden.numFlowers; i++) {
    // Create a new flower
    let flower = createFlower();
    // Add the flower to the array of flowers
    garden.flowers.push(flower);
  }
}

// draw()
// Displays our flowers
function draw() {
  // Display the grass
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

  // Loop through all the flowers in the array and display them
  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    displayFlower(flower);
  }
}

// createFlower()
// Creates a new JavaScript Object describing a flower and returns it
function createFlower() {
  // Create our object
  let flower = {
    // Position and size information
    x: random(0, width),
    y: random(0, height),
    size: 50,
    stemLength: 75,
    stemThickness: 10,
    petalThickness: 10,
    // Color information
    stemColor: {
      r: 50,
      g: 150,
      b: 50
    },
    petalColor: {
      r: 200,
      g: 50,
      b: 50
    },
    centreColor: {
      r: 50,
      g: 0,
      b: 0
    }
  };
  return flower;
}

// displayFlower(flower)
// Displays the provided flower on the canvas
function displayFlower(flower) {
  push();
  // Draw a line for the stem
  strokeWeight(flower.stemThickness);
  stroke(flower.stemColor.r, flower.stemColor.g, flower.stemColor.b);
  line(flower.x, flower.y, flower.x, flower.y + flower.stemLength);
  // Draw a circle with a heavy outline for the flower
  strokeWeight(flower.petalThickness);
  fill(flower.centreColor.r, flower.centreColor.g, flower.centreColor.b);
  stroke(flower.petalColor.r, flower.petalColor.g, flower.petalColor.b);
  ellipse(flower.x, flower.y, flower.size);
  pop();
}
