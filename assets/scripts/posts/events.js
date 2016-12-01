'use strict'

const api = require('./api')
const app = require('../app');



// Takes raw database items and returns HTML string
function translate(item, creating) {
  if (app.user.id === item.user_id || creating) {
    return `<div data-item=${item.id} class="item">
      <div><i class='glyphicon glyphicon-remove'></i></div>
        <div class="contents" contenteditable="true">${item.title}</div>
        <div class="contents" contenteditable="true">${item.date}</div>
        <div class="contents" contenteditable="true">${item.description}</div>
      </div>`
  } else {
    return `<div data-item=${item.id} class="item">
        <div class="contents">${item.title}</div>
        <div class="contents">${item.date}</div>
        <div class="contents">${item.description}</div>
      </div>`
  }

}


// Adds new events
const addPostHandlers = function() {

  $("#form").on('submit', function(e) {
    e.preventDefault();
    let item = {
      title: $('#title').val(),
      date: $('#date').val(),
      description: $('#description').val(),
    }
    api.submitPost({
      post: item
    }).then(data => {
      $(".side-content-right").append(translate(data, true))
    })
  });

  // Removes events created by specific user
  $(document).on("click", '.glyphicon-remove', function() {
    let item = $(this).parent().parent()
    api.deletePost(item.attr('data-item'))
    item.remove()
  });

  $(document).on('keyup', '.item', (e) => {
    console.log(e.target)
  });
}

// Create html string from array of items
function getItemsAndFill() {
  api.getAllPosts().then(items => {
    let str = "";
    items.forEach(item => str = str + translate(item));
    $('.side-content-right').html(str);
  })
}






module.exports = {
  addPostHandlers,
  getItemsAndFill
}
