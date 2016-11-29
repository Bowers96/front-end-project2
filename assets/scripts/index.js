'use strict';

let main = function() {
  $('img').click(function() {
    $('.dropdown-menu').show(500).hide();
  });

  $(".btn").click(function() {
    let item = {
      title: $('#title').val(),
      category: $('#category').val(),
      description: $('#description').val()
    }
    $(".side-content-right").append(`<div class="contents">${item.title}</div><div class="contents">${item.category}</div><div class="contents">${item.description}</div>`);
  });
};
$(document).ready(main);
