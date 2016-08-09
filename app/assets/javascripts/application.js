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

    var addUrlParam = function(search, key, val){
      var newParam = 'format=wookiee',
      params = '?' + newParam;

  // If the "search" string exists, then build params from it
  if (search) {
    // Try to replace an existance instance
    params = search.replace(new RegExp('([?&])' + key + '[^&]*'), '$1' + newParam);

    // If nothing was replaced, then add the new param to the end
    if (params === search) {
      params += '?' + newParam;
    }
  }

  return params;
};


//    var loc = location.href; // I did not wrote this code from here
//    loc += loc.indexOf("?") === -1 ? "?" : "/";
//    location.href = loc + "?format=wookiee"; // to here
//     // $('form').append('<p>?format=wookiee</p>') // I want to append this in order to translate json data to wookie form and this was my guess
  })
});

// I didn't wrote this code!
function PlaySound(soundobj) {
  var thissound=document.getElementById(soundobj);
  thissound.play();
}

function StopSound(soundobj) {
  var thissound=document.getElementById(soundobj);
  thissound.pause();
  thissound.currentTime = 0;
}
//til here! This is for the wookiee image to play sound when the mouse hover
