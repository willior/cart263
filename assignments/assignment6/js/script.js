"use strict";

/*****************

Will Graham-Simpkins
assignment6

******************/

$(document).ready(function () {
  $.getJSON('data/data.JSON',dataLoaded);
});
$(document).click(function () {
  $.getJSON('data/data.JSON',dataLoaded);
});

let vowels = 'aeiou';
let first = true;

function dataLoaded(data) {
  let condiment = getRandomElement(data.condiments);
  let cat = getRandomElement(data.cats);
  let room = getRandomElement(data.rooms);
  let verb = 'is';
  let description;
  if (condiment.charAt(condiment.length - 1) === 's') {
    verb = 'are';
  }
  let indefiniteArticle = 'a';
  for (let i = 0; i < vowels.length; i++){
    if (cat.toLowerCase().charAt(0) === vowels[i]) {
      indefiniteArticle = 'an';
    }
  }
  let country = getRandomElement(data.countries);
  if (!first) {
    condiment = condiment.toLowerCase();
    let add = getRandomElement(data.additionals);
    description = `${add}, ${condiment} ${verb} like ${indefiniteArticle} ${cat} in a ${room} based out of ${country}. `;
  }
  if (first) {
    description = `${condiment} ${verb} like ${indefiniteArticle} ${cat} in a ${room} based out of ${country}. `;
    first = false;
  }
  $('body').append(description);
  console.log(first);
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
