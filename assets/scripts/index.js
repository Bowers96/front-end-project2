'use strict';

let main = function() {
  $('img').click(function() {
    $('.dropdown-menu').slideToggle();
  });


  $(".btn").click(function() {
    let item = {
      title: $('#title').val(),
      category: $('#category').val(),
      description: $('#description').val()
    }
    $(".side-content-right").append(`<div class="item"><div class="contents">${item.title}</div><div class="contents">${item.category}</div><div class="contents">${item.description}</div></div>`);
  });
};


$("#auth-one").click(function() {
  $('.frame').hide()
  $('.sign-up').show();
});

$(".btn-one").click(function() {
  $('.frame').hide();
  $('.sign-in').show();
});

$("#auth-two").click(function() {
  $('.frame').hide();
  $('.sign-in').show();
});

$(".btn-two").click(function() {
  $('.frame').hide();
  $('.main').show();
});

$("#auth-three").click(function() {
  $('.frame').hide();
  $('.change-password').show();
});

$("#auth-four").click(function() {
  $('.frame').hide();
  $('.sign-out').show();
});



$(document).ready(main);
