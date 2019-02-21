"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let cats = [
"Abyssinian",
"Aegean",
"American Bobtail",
"American Curl",
"American Shorthair",
"American Wirehair",
"Arabian Mau",
"Asian",
"Asian Semi-longhair",
"Australian Mist",
"Balinese",
"Bambino",
"Bengal",
"Birman",
"Bombay",
"Brazilian Shorthair",
"British Longhair",
"British Semi-longhair",
"British Shorthair",
"Burmese",
"Burmilla",
"California Spangled",
"Chantilly-Tiffany",
"Chartreux",
"Chausie",
"Cheetoh",
"Colorpoint Shorthair",
"Cornish Rex",
"Cymric",
"Cyprus",
"Devon Rex",
"Donskoy",
"Dragon Li",
"Dwarf cat",
"Egyptian Mau",
"European Shorthair",
"Exotic Shorthair",
"Foldex",
"German Rex",
"Havana Brown",
"Highlander",
"Himalayan",
"Japanese Bobtail",
"Javanese",
"Khao Manee",
"Korat",
"Korean Bobtail",
"Korn Ja",
"Kurilian Bobtail",
"LaPerm",
"Lykoi",
"Maine Coon",
"Manx",
"Mekong Bobtail",
"Minskin",
"Munchkin",
"Napoleon",
"Nebelung",
"Norwegian Forest cat",
"Ocicat",
"Ojos Azules",
"Oregon Rex",
"Oriental Bicolor",
"Oriental Longhair",
"Oriental Shorthair",
"PerFold",
"Persian (Modern)",
"Persian (Traditional)",
"Peterbald",
"Pixie-bob",
"Raas",
"Ragamuffin",
"Ragdoll",
"Russian Blue",
"Russian White, Black and Tabby",
"Sam Sawet",
"Savannah",
"Scottish Fold",
"Selkirk Rex",
"Serengeti",
"Serrade Petit",
"Siamese",
"Siberian",
"Singapura",
"Snowshoe",
"Sokoke",
"Somali",
"Sphynx",
"Suphalak",
"Thai",
"Thai Lilac",
"Tonkinese",
"Toyger",
"Turkish Angora",
"Turkish Van",
"Ukrainian Levkoy"
];
let correctCat;
let answers = [];
const NUM_OPTIONS = 4;

$(document).ready(function(){

  $('#beginButton').on('click', function() {
    $('#beginButton').remove();
    startGame();
  });

});

function startGame() {
  console.log("starting");
  newRound();
}

// creates a div using jQuery UI on a div with the label specified
// adds to the page
function addButton(label) {

  let $guess = $('<div class="guess"></div>');
  $guess.text(label);
  $guess.button();
  $guess.on('click', function() {
    if($(this).text() === correctCat) {
      console.log("correct");
      responsiveVoice.speak(correctCat, 'UK English Male');
      $('.guess').remove();
      setTimeout(newRound,400);
    }
    else {
      console.log("wrong");
      $(this).effect('shake');
      speakCat(correctCat);
    }
  });
  $('body').append($guess);
}

function newRound() {

  answers = [];

  for (let i=0; i<NUM_OPTIONS; i++){
    let cat = cats[Math.floor(Math.random() * cats.length)];
    addButton(cat);
    answers.push(cat);
  }

  correctCat = answers[Math.floor(Math.random() * answers.length)];


}

function speakCat(name){
  let reverseCat = name.split('').reverse().join('');
  let options = {
    pitch: Math.random(),
    rate: Math.random()
  };

  responsiveVoice.speak(reverseCat, 'UK English Male',options);
}
