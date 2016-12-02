'use strict'

const api = require('./api');
const app = require('../app');



// Takes raw database items and returns HTML string
function translate(item, creating) {
  if (app.user.id === item.user_id || creating) {
    return `<div data-item=${item.id} class="item">
      <div><i class='glyphicon glyphicon-remove'></i></div>
        <div class="contents title" contenteditable="true">${item.title}</div>
        <div class="contents date" contenteditable="true">${item.date}</div>
        <div class="contents description" contenteditable="true">${item.description}</div>
      </div>`
  } else {
    return `<div data-item=${item.id} class="item">
        <div class="contents title">${item.title}</div>
        <div class="contents date">${item.date}</div>
        <div class="contents description">${item.description}</div>
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

  // Allows user to update event posts
  $(document).on('keypress', '.item', (e) => {
    if (e.which === 13) {
      e.preventDefault();
      e.stopPropagation();

      let item = $(e.target).parent()
      let post = {
        title: item.find('.title').text(),
        date: item.find('.date').text(),
        description: item.find('.description').text()
      }
      api.updatePost(item.attr('data-item'), {
        post
      })
    }
  });
}

// Create html string from array of items
function getItemsAndFill() {
  api.getAllPosts().then(items => {
    let str = "";
    if (items[0]) {
      items.forEach(item => str = str + translate(item));
      $('.side-content-right').html(str);
    }
  })
}






module.exports = {
  addPostHandlers,
  getItemsAndFill
}
