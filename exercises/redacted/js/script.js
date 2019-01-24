$(document).ready(setup);

let $spans;

function setup() {
  $spans = $('span');
  setInterval(update,500);
  $spans.on('click',spanClicked);
  // $('span').click(spanClicked);

}

function update() {
  $spans.each(updateSpan);
}

function updateSpan() {
  let x = Math.random();
  if (x < 0.1) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}

function spanClicked() {
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}
