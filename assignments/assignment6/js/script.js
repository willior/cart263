"use strict";

/*****************

example of JSON syntax

******************/

$(document).ready(function () {
  $.getJSON('data/data.JSON',dataLoaded);
});

let vowels = 'aeiou';

function dataLoaded(data) {

  let condiment = getRandomElement(data.condiments);
  let cat = getRandomElement(data.cats);
  let room = getRandomElement(data.rooms);
  let verb = 'is';
  if (condiment.charAt(condiment.length - 1) === 's') {
    verb = 'are';
  }
  let indefiniteArticle = 'a';
  for (let i = 0; i < vowels.length; i++){
    if (cat.toLowerCase().charAt(0) === vowels[i]) {
      indefiniteArticle = 'an';
    }
  }
    console.log(condiment);
  console.log(verb);
  console.log(cat);
  console.log(room);
  let description = `${condiment} ${verb} like ${indefiniteArticle} ${cat} in a ${room}`;
  console.log(description);
  $('body').append(description)
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];

}
