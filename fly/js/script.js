/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let $mouth;
let $fly;

let buzzSFX = new Audio("assets/sounds/buzz.mp3");
let chewSFX = new Audio("assets/sounds/crunch.wav");

// "anonymous function"
$(document).ready(function (){

});

$(document).ready(setup);

function setup() {

  console.log("ready!");

  $fly = $('#fly');
  $fly.draggable();

  buzzSFX.play();
  buzzSFX.loop = true;

  $mouth = $('#mouth');
  $mouth.droppable({

    drop: foodDropped

    // -- ANONYMOUS FUNCTION --
    //
    // drop: function( event, ui ) {
    //   console.log("anonymous dropped!");
    //   ui.draggable.remove();
    // }

  });

  function foodDropped (event, ui) {
    console.log("dropped!");
    ui.draggable.remove();
    $(this).attr('src','assets/images/mouth-closed.png');
    buzzSFX.loop = false;
    buzzSFX.pause();

    let chewInterval = setInterval(chew,200);

    setTimeout(function () {
      clearInterval(chewInterval);
    },2000);
  }

  function chew() {
    if ($mouth.attr('src') === 'assets/images/mouth-open.png'){
      $mouth.attr('src','assets/images/mouth-closed.png');
      chewSFX.play();
    }
    else {
      $mouth.attr('src','assets/images/mouth-open.png');
      chewSFX.play();
    }
  }
}
