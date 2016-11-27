'use strict';

let main = function() {
  $('img').click(function() {
    $('.dropdown-menu').show(500).hide();
  });
  return false;
};


$(document).ready(main);
