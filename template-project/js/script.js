/*****************

template

******************/

$(document).ready(function(){

  $(document).on('click',function() {
    let options = {
      rate: 0.2,
      pitch: 0.1
    };
    let sayThis = "aeiouaeiouaeiou";
    responsiveVoice.speak(sayThis,"UK English Male", options);
  })
});
