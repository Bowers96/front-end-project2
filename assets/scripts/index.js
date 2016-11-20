'use strict';

let template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

let add = function(item) {
  let html = template(item);
  $(html).appendTo('.list');
};

let main = function() {
  $('form').submit(function() {
    let todo = $('#todo');
    if (todo.val() !== "") {
      let html = template(todo.val());
      $(html).appendTo('.list');
      $(todo).val("");
    }
    return false;
  });

  $(document).on("click", '.glyphicon-remove', function() {
    $(this).parent().remove();
  });


  if (annyang) {
    let commands = {
      'add *item': add,
    };
    annyang.addCommands(commands);
    annyang.start();
  }
};

$(document).ready(main);
