// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
var deadline = new Date(currentTime + timeInMinutes*60*1000);



function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

// getTimeRemaining(deadline).minutes;

// The below do not work because of positioning
// console.log(deadline)
// console.log(getTimeRemaining(deadline).minutes)



function initializeClock(id, endtime){
  var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
  function updateClock(){
  var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
  if(t.total<=0){
    clearInterval(timeinterval);
  }
}

updateClock(); // run function once at first to avoid delay
var timeinterval = setInterval(updateClock,1000);
}

// // var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
var timeInMinutes = 25;
var currentTime = Date.parse(new Date());
var deadline = new Date(currentTime + timeInMinutes*60*1000);
// console.log(initializeClock("clockdiv", deadline));

console.log(deadline)
console.log(getTimeRemaining(deadline).minutes)


function startClock(){
  console.log(initializeClock("clockdiv", deadline));
  // document.getElementById('buttonstart').innerHTML = 'Stop';
  $('#buttonstart').hide();
  
    document.getElementById('buttonstart').onclick = function stopClock() {
    document.getElementById('buttonstart').innerHTML = 'Start';
}
}



function displayClock ( )
  {
  var currentTime = new Date ( );
    var currentHours = currentTime.getHours ( );
    var currentMinutes = currentTime.getMinutes ( );
    var currentSeconds = currentTime.getSeconds ( );

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

    // Convert the hours component to 12-hour format if needed
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

    // Convert an hours component of "0" to "12"
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;

    // Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    
    
    $("#clock").html(currentTimeString);
    
    // These work because they are in scope 
    // console.log(currentHours)
     // console.log(currentSeconds)
        
 }
 // console.log(currentHours)
 // console.log(currentMinutes)
 // console.log(currentSeconds)
 // console.log(currentTimeString)
 console.log(currentTime)

$(document).ready(function()
{
   setInterval('displayClock()', 1000);
});

// Ajax call for quote from formatic

  $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      }
    })
    .done(update)
    .fail(handleErr);
// });

function update(response) {
  // $('#log').prepend('<pre>' + $('#response').html(response) + '</pre>');
  // $('#response').html(response)
  // $('#log').prepend($('#response').html());
  $('#response').html(JSON.stringify(response.quoteText));
  $('#response1').html(JSON.stringify(response.quoteAuthor));
  console.log(response)
}

console.log(response)
console.log(log)
// console.log(quotetext)


function handleErr(jqxhr, textStatus, err) {
  console.log("Request Failed: " + textStatus + ", " + err);
}

