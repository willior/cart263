"use strict";

/*****************

example of JSON syntax

******************/

$(document).ready(function () {

  $.getJSON('data/bestsellers.JSON',dataLoaded);
  let wrong = 'wrong!';
  let template = `This is a normal string, ${wrong}`;
  console.log(template);

});

function dataLoaded(data) {
  let firstBook = data.books[0];
  console.log(data);
}
