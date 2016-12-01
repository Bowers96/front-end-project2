'use strict';
require('./posts/api');

const {
  addHandlers
} = require('./auth/events');

const {
  addPostHandlers
} = require('./posts/events')


let main = function() {
  $('img').click(function() {
    $('.dropdown-menu').slideToggle();
  });

  addHandlers();
  addPostHandlers();
};


$("#auth-one").click(function() {
  $('.frame').hide()
  $('.sign-up').show();
  $('.dropdown-menu').hide();
});

$(".btn-one").click(function() {
  $('.frame').hide();
  $('.sign-in').show();

});

$("#auth-two").click(function() {
  $('.frame').hide();
  $('.sign-in').show();
  $('.dropdown-menu').hide();
});

$(".btn-two").click(function() {
  $('.frame').hide();
  $('.main').show();

});

$("#auth-three").click(function() {
  $('.frame').hide();
  $('.change-password').show();
  $('.dropdown-menu').hide();
});

$("#auth-four").click(function() {
  $('.frame').hide();
  $('.sign-out').show();
  $('.dropdown-menu').hide();
});




$(document).ready(main);
