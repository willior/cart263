"use strict";

/*****************

Circle Eater
Pippin Barr

A simple game in which the player controls a shrinking circle with their mouse and tries
to overlap another circle (food) in order to grow bigger.

******************/

const AVATAR_SIZE_GAIN = 50;
const AVATAR_SIZE_LOSS = 0.4;
const FOOD_MAXSPEED = 16;

// variable for death screen
let death = 0;

let avatar = {
  x: 0,
  y: 0,
  maxSize: 64,
  size: 64,
  active: true,
  color: '#cccc55'
}

let food = {
  x: 0,
  y: 0,
  tx: 0.0,
  ty: 0.0,
  vx: 0,
  vy: 0,
  size: 64,
  color: '#55cccc'
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  positionFood();
  noCursor();
}

function draw() {
  if (!avatar.active) {

    // draws death screen
    background(death,0,0);
    death++;
    death = constrain(death, 0, 200);
    return;
  }
  background(0);
  updateAvatar();
  checkCollision();
  displayAvatar();
  updateFood();
  displayFood();
}

function updateAvatar() {
  avatar.x = mouseX;
  avatar.y = mouseY;
  avatar.size = constrain(avatar.size - AVATAR_SIZE_LOSS,0,avatar.maxSize);
  if (avatar.size === 0) {
    avatar.active = false;
  }
}

function checkCollision() {
  let d = dist(avatar.x,avatar.y,food.x,food.y);
  if (d < avatar.size/2 + food.size/2) {
    avatar.size = constrain(avatar.size + AVATAR_SIZE_GAIN,0,avatar.maxSize);
    positionFood();
  }
}

function displayAvatar() {
  push();
  noStroke();
  fill(avatar.color);
  ellipse(avatar.x,avatar.y,avatar.size);
  pop();
}

function updateFood() {
  // food movement uses noise() function for smoother speed modulations
  // noise()returns a value between 0 & 1
  // the value is multiplied by 2 and then subtracted by 1
  // this ensures the result of noise() comes back between -1 & 1 (not 0 & 1)
  // this value is multiplied by FOOD_MAXSPEED, determining velocity
  food.tx += 0.01;
  food.vx = FOOD_MAXSPEED * (noise(food.tx) * 2 - 1);
  food.ty += 0.01;
  food.vy = FOOD_MAXSPEED * (noise(food.ty) * 2 - 1);
  food.x += food.vx;
  food.y += food.vy;

  // food wrapping
  if (food.x < 0)  {
    food.x += windowWidth;
  }

  if (food.x >= windowWidth) {
    food.x -= windowWidth;
  }

  if (food.y < 0) {
    food.y += windowHeight;
  }

  if (food.y >= windowHeight) {
    food.y -= windowHeight;
  }
}

function displayFood() {
  push();
  noStroke();
  fill(food.color);
  ellipse(food.x,food.y,food.size);
  pop();
}

function positionFood() {
  food.x = random(0,width);
  food.y = random(0,height);

  //random seed for food velocities
  food.tx = random(0,100);
  food.ty = random(0,100);
}
