'use strict';
//remove signIn and signOut
const app = require('../app.js');
const postsEvents = require('../posts/events');
window.app = app;
//remove me before code-along
const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
  postsEvents.getItemsAndFill()
};

//remove me before code-along
const signOutSuccess = () => {
  app.user = null;
  showSignoutMessage();
  console.log(app);
};

const changePasswordSuccess = () => {
  console.log("Password Successfully Changed.");
};

const success = (data) => {
  app.user = data.user;
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const showSignoutMessage = () => {
  $('.signout-message').fadeIn();

  setTimeout(function() {
    $('.signout-message').fadeOut();
  }, 5000);
};


module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  showSignoutMessage
};
