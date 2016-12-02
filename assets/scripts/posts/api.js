'use strict';

const app = require('../app');


const getAllPosts = function() {
  return $.ajax({
    url: app.host + '/posts',
    method: 'GET',
  });
};

const submitPost = function(data) {
  return $.ajax({
    method: 'POST',
    url: app.host + '/posts/',
    data: data,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const updatePost = function(id, data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/posts/' + id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const deletePost = function(id) {
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/posts/' + id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};




module.exports = {
  getAllPosts,
  submitPost,
  updatePost,
  deletePost
}
