"use strict";

/*****************

a simple notebook

******************/
$(document).ready(function() {

  let notes = localStorage.getItem('notes');
  if (notes === null) {
    $('#notebook').text("Type your notes here!");
  }
  else {
    $('#notebook').html(notes);
  }

  $('#notebook').on('keyup',function (event){
    let data = $(this).html();
    localStorage.setItem('notes', data);
  });
});
