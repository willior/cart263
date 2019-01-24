"use strict";

/*****************

OOP Circle Eater
Pippin Barr

An Object-Oriented version of the Circle Eater program.
The player moves a circle around with the mouse.
Another circle represents food which the player eats by overlapping.
The player circle shrinks over time, but grows when it eats.

******************/

// Constants for key quantities
const AVATAR_MAX_SIZE = 64;
const AVATAR_SIZE_LOSS_PER_FRAME = 0.8;
const FOOD_MIN_SIZE = 20;
const FOOD_MAX_SIZE = 100;

const FOOD_MAX_SPEED = 16;

// variables for food movement
let FOOD_TEMP_X = 0.0;
let FOOD_TEMP_Y = 0.0;
let FOOD_VEL_X = 0;
let FOOD_VEL_Y = 0;

// Variables to store the two key objects
let avatar;

// foods array
let foods = [];

// variable for death screen
let death = 0;

// setup()
//
// Create the canvas, avatar, and food, disable the cursor

function setup() {
  createCanvas(windowWidth,windowHeight);
  avatar = new Avatar(mouseX,mouseY,AVATAR_MAX_SIZE,AVATAR_SIZE_LOSS_PER_FRAME)

// generating 32 foods
  for (let i = 0; i < 32; i++) {
    foods.push(new Food(random(0,width),random(0,height),FOOD_MIN_SIZE,FOOD_MAX_SIZE,FOOD_MAX_SPEED,FOOD_TEMP_X,FOOD_TEMP_Y,FOOD_VEL_X,FOOD_VEL_Y));
  }
  // food = new Food(random(0,width),random(0,height),FOOD_MIN_SIZE,FOOD_MAX_SIZE,FOOD_MAX_SPEED,FOOD_TEMP_X,FOOD_TEMP_Y,FOOD_VEL_X,FOOD_VEL_Y);
  noCursor();

}


// draw()
//
// Clear the background
// Update the avatar and check for eating
// Display the avatar and food

function draw() {
  background(0);

  avatar.update();
  avatar.display();


for (let i = 0; i < foods.length; i++) {
  if (avatar.collide(foods[i])) {
    avatar.eat(foods[i]);
  }

  foods[i].update();
  foods[i].display();
}

  // food.update();
  // food.display();
}
