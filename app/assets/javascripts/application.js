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
//= require bootstrap-sprockets

$(document).ready(function () {
  $('#wookiever').click(function () {
   var loc = location.href; // I did not wrote this code from here
   loc += loc.indexOf("?") === -1 ? "?" : "/";
   location.href = loc + "?format=wookiee"; // to here
    // $('form').append('<p>?format=wookiee</p>') // I want to append this in order to translate json data to wookie form and this was my guess
     })
});

// var audio = document.getElementsByTagName("audio")[0];
// audio.play();

// var audio = $("audio/chewsound.mpe")[0];
// audio.play();

var audio = $("audio/chewsound.mp3")[0]; // I found this code and filled with the file name but not working. hmm.
$("#wookiever").mouseenter(function() {
  audio.play();
});
