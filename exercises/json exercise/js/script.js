"use strict";

/*****************

example of JSON syntax

******************/

$(document).ready(function () {
  $.getJSON('data/data.JSON',dataLoaded);
});

function dataLoaded(data) {

  let condiment = getRandomElement(data.condiments);
  let cat = getRandomElement(data.cats);
  let room = getRandomElement(data.rooms);
  console.log(condiment);
  let verb = 'is';
  if (condiment.charAt(condiment.length - 1) === 's') {
    verb = 'are';
  }
  console.log(verb);
  console.log(cat);
  console.log(room);
  let description = `${condiment} ${verb} like a ${cat} in a ${room}`;
  console.log(description);
  $('body').append(description)
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];

}
