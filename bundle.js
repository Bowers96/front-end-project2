webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// user require with a reference to bundle the file and use it in this file
	// let example = require('./example');

	// load manifests
	// scripts

	__webpack_require__(1);

	// styles
	__webpack_require__(10);

	// attach jQuery globally
	__webpack_require__(14);
	__webpack_require__(15);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(3);

	var _require = __webpack_require__(5),
	    addHandlers = _require.addHandlers;

	var _require2 = __webpack_require__(8),
	    addPostHandlers = _require2.addPostHandlers;

	var main = function main() {
	  $('img').click(function () {
	    $('.dropdown-menu').slideToggle();
	  });

	  addHandlers();
	  addPostHandlers();
	};

	$("#auth-one").click(function () {
	  $('.frame').hide();
	  $('.sign-up').show();
	  $('.dropdown-menu').hide();
	});

	$(".btn-one").click(function () {
	  $('.frame').hide();
	  $('.sign-in').show();
	});

	$("#auth-two").click(function () {
	  $('.frame').hide();
	  $('.sign-in').show();
	  $('.dropdown-menu').hide();
	});

	$(".btn-two").click(function () {
	  $('.frame').hide();
	  $('.main').show();
	});

	$("#auth-three").click(function () {
	  $('.frame').hide();
	  $('.change-password').show();
	  $('.dropdown-menu').hide();
	});

	$("#auth-four").click(function () {
	  $('.frame').hide();
	  $('.sign-out').show();
	  $('.dropdown-menu').hide();
	});

	$(document).on("click", '.glyphicon-remove', function () {
	  $(this).parent().parent().remove();
	});

	$(document).ready(main);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var app = __webpack_require__(4);

	var getAllPosts = function getAllPosts() {
	  return $.ajax({
	    url: app.host + '/posts',
	    method: 'GET'
	  });
	};

	var submitPost = function submitPost(data) {
	  return $.ajax({
	    method: 'POST',
	    url: app.host + '/posts/',
	    data: data,
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    }
	  });
	};

	var updatePost = function updatePost(id, data) {
	  return $.ajax({
	    method: 'PATCH',
	    url: app.host + '/posts/' + id,
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    },
	    data: data
	  });
	};

	var deletePost = function deletePost(id) {
	  return $.ajax({
	    method: 'DELETE',
	    url: app.host + '/posts/' + id,
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    }
	  });
	};

	module.exports = {
	  getAllPosts: getAllPosts,
	  submitPost: submitPost,
	  updatePost: updatePost,
	  deletePost: deletePost
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  host: "https://cryptic-hollows-32556.herokuapp.com"
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var api = __webpack_require__(6);
	var ui = __webpack_require__(7);
	var app = __webpack_require__(4);
	var getFormFields = __webpack_require__(9);

	var onSignUp = function onSignUp(event) {
	  event.preventDefault();
	  var data = getFormFields(event.target);
	  api.signUp(data).done(ui.success).fail(ui.fail);
	};

	var onSignIn = function onSignIn(event) {
	  event.preventDefault();
	  var data = getFormFields(event.target);
	  api.signIn(data).done(ui.signInSuccess).fail(ui.fail);
	};

	var onSignOut = function onSignOut(event) {
	  event.preventDefault();
	  var data = getFormFields(event.target);
	  api.signOut(data).done(ui.signOutSuccess).fail(ui.fail);
	};

	var onChangePassword = function onChangePassword(event) {
	  event.preventDefault();
	  var data = getFormFields(event.target);
	  api.changePassword(data).done(ui.changePasswordSuccess).fail(ui.fail);
	};

	var addHandlers = function addHandlers() {
	  $('#sign-up').on('submit', onSignUp);
	  $('#sign-in').on('submit', onSignIn);
	  $('#auth-four').on('click', onSignOut);
	  $('#change-password').on('submit', onChangePassword);
	};

	module.exports = {
	  addHandlers: addHandlers
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var app = __webpack_require__(4);
	// const getFormFields = require('../../../lib/get-form-fields.js');

	//authApi.signUp(authUi.success, authUi.failure, data);

	var signUp = function signUp(data) {

	  return $.ajax({
	    url: app.host + '/sign-up/',
	    method: 'POST',
	    data: data
	  });
	};

	var signIn = function signIn(data) {

	  return $.ajax({
	    url: app.host + '/sign-in/',
	    method: 'POST',
	    data: data
	  });
	};

	var signOut = function signOut() {
	  return $.ajax({
	    method: 'DELETE',
	    url: app.host + '/sign-out/' + app.user.id,
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    }
	  });
	};

	var changePassword = function changePassword(data) {
	  return $.ajax({
	    method: 'PATCH',
	    url: app.host + '/change-password/' + app.user.id,
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    },
	    data: data
	  });
	};

	module.exports = {
	  signUp: signUp,
	  signIn: signIn,
	  signOut: signOut,
	  changePassword: changePassword
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	//remove signIn and signOut

	var app = __webpack_require__(4);
	var postsEvents = __webpack_require__(8);
	window.app = app;
	//remove me before code-along
	var signInSuccess = function signInSuccess(data) {
	  app.user = data.user;

	  postsEvents.getItemsAndFill();
	};

	//remove me before code-along
	var signOutSuccess = function signOutSuccess() {
	  app.user = null;
	  showSignoutMessage();
	};

	var changePasswordSuccess = function changePasswordSuccess() {};

	var success = function success(data) {
	  app.user = data.user;
	};

	var failure = function failure(error) {};

	var showSignoutMessage = function showSignoutMessage() {
	  $('.signout-message').fadeIn();

	  setTimeout(function () {
	    $('.signout-message').fadeOut();
	  }, 5000);
	};

	module.exports = {
	  failure: failure,
	  success: success,
	  signInSuccess: signInSuccess,
	  signOutSuccess: signOutSuccess,
	  changePasswordSuccess: changePasswordSuccess,
	  showSignoutMessage: showSignoutMessage
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var api = __webpack_require__(3);
	var app = __webpack_require__(4);

	// Takes raw database items and returns HTML string
	function translate(item, creating) {
	  if (app.user.id === item.user_id || creating) {
	    return '<div data-item=' + item.id + ' class="item">\n      <div><i class=\'glyphicon glyphicon-remove\'></i></div>\n        <div class="contents title" contenteditable="true">' + item.title + '</div>\n        <div class="contents date" contenteditable="true">' + item.date + '</div>\n        <div class="contents description" contenteditable="true">' + item.description + '</div>\n      </div>';
	  } else {
	    return '<div data-item=' + item.id + ' class="item">\n        <div class="contents title">' + item.title + '</div>\n        <div class="contents date">' + item.date + '</div>\n        <div class="contents description">' + item.description + '</div>\n      </div>';
	  }
	}

	// Adds new events
	var addPostHandlers = function addPostHandlers() {

	  $("#form").on('submit', function (e) {
	    e.preventDefault();
	    var item = {
	      title: $('#title').val(),
	      date: $('#date').val(),
	      description: $('#description').val()
	    };
	    api.submitPost({
	      post: item
	    }).then(function (data) {
	      $(".side-content-right").append(translate(data, true));
	    });
	  });

	  // Removes events created by specific user
	  $(document).on("click", '.glyphicon-remove', function () {
	    var item = $(this).parent().parent();
	    api.deletePost(item.attr('data-item'));
	    item.remove();
	  });

	  // Allows user to update event posts
	  $(document).on('keypress', '.item', function (e) {
	    if (e.which === 13) {
	      e.preventDefault();
	      e.stopPropagation();

	      var item = $(e.target).parent();
	      var post = {
	        title: item.find('.title').text(),
	        date: item.find('.date').text(),
	        description: item.find('.description').text()
	      };
	      api.updatePost(item.attr('data-item'), {
	        post: post
	      });
	    }
	  });
	};

	// Create html string from array of items
	function getItemsAndFill() {
	  api.getAllPosts().then(function (items) {
	    var str = "";
	    if (items[0]) {
	      items.forEach(function (item) {
	        return str = str + translate(item);
	      });
	      $('.side-content-right').html(str);
	    }
	  });
	}

	module.exports = {
	  addPostHandlers: addPostHandlers,
	  getItemsAndFill: getItemsAndFill
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	var addFormField = function addFormField(target, names, value) {
	  var name = names.shift();
	  var next = names[0];
	  if (next === '') {
	    // name is an array
	    target[name] = target[name] || [];
	    target[name].push(value);
	  } else if (next) {
	    // name is a parent key
	    target[name] = target[name] || {};
	    addFormField(target[name], names, value);
	  } else {
	    // name is the key for value
	    target[name] = value;
	  }

	  return target;
	};

	var getFormFields = function getFormFields(form) {
	  var target = {};

	  var elements = form.elements || [];
	  for (var i = 0; i < elements.length; i++) {
	    var e = elements[i];
	    if (!e.hasAttribute('name')) {
	      continue;
	    }

	    var type = 'TEXT';
	    switch (e.nodeName.toUpperCase()) {
	      case 'SELECT':
	        type = e.hasAttribute('multiple') ? 'MULTIPLE' : type;
	        break;
	      case 'INPUT':
	        type = e.getAttribute('type').toUpperCase();
	        break;
	    }

	    var names = e.getAttribute('name').split('[').map(function (k) {
	      return k.replace(/]$/, '');
	    });

	    if (type === 'MULTIPLE') {
	      for (var _i = 0; _i < e.length; _i++) {
	        if (e[_i].selected) {
	          addFormField(target, names.slice(), e[_i].value);
	        }
	      }
	    } else if (type !== 'RADIO' && type !== 'CHECKBOX' || e.checked) {
	      addFormField(target, names, e.value);
	    }
	  }

	  return target;
	};

	module.exports = getFormFields;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, "body {\n  background: tomato;\n  max-width: 100%;\n  margin: 0 auto; }\n\n.header {\n  background: rgba(255, 255, 255, 0.8);\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);\n  position: fixed;\n  width: 100%;\n  margin-left: -15px; }\n\nh1 {\n  font-family: 'Bangers', cursive;\n  text-align: center;\n  color: black;\n  font-size: 50px; }\n\nh3 {\n  font-size: 35px; }\n\np {\n  font-size: 15px; }\n\n.dropdown {\n  float: left;\n  margin-top: -52px;\n  margin-left: 50px; }\n\n.dropdown-menu {\n  border-radius: 0px;\n  box-shadow: none;\n  border: none;\n  min-width: 200px;\n  top: 28px;\n  background-color: #000; }\n\n.dropdown-menu li {\n  font-size: 20px;\n  font-family: 'Bangers', cursive;\n  margin-left: 0;\n  float: none; }\n\n.dropdown-menu li a {\n  color: #fff;\n  padding: 5px 0;\n  text-align: center;\n  cursor: pointer; }\n\n.dropdown-menu li a:hover {\n  background: rgba(255, 255, 255, 0.8);\n  color: #000; }\n\n.side-content {\n  margin-top: 129px;\n  width: 100%;\n  height: 500px;\n  background: rgba(255, 255, 255, 0.8);\n  border: 5px solid black; }\n\n.col-header {\n  text-align: center;\n  font-family: 'Bangers', cursive;\n  padding-top: 1px;\n  background-color: black;\n  color: tomato;\n  padding: 10px; }\n  .col-header p, .col-header h3 {\n    margin: 0; }\n\n.btn {\n  background: black;\n  color: white;\n  display: block;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  float: right;\n  margin: 15px 22px 0 0;\n  padding: 8px;\n  font-size: 20px;\n  cursor: pointer; }\n\n.footer {\n  background: rgba(255, 255, 255, 0.8);\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  margin-left: -15px;\n  text-align: center;\n  padding: 10px;\n  font-family: 'Bangers', cursive; }\n\np {\n  margin: 7px; }\n\n.group-input-one {\n  width: 94%;\n  margin: 10px 3% 0;\n  padding: 20px;\n  font-family: 'Bangers', cursive;\n  font-size: 20px; }\n\n.group-input {\n  width: 94%;\n  margin: 20px 3% 0;\n  padding: 20px;\n  font-family: 'Bangers', cursive;\n  font-size: 20px; }\n\n.group-input-one:focus {\n  outline: none; }\n\n.group-input:focus {\n  outline: none; }\n\n.right-col {\n  width: 100%;\n  margin-top: 129px;\n  margin-left: 40px;\n  height: 500px;\n  border: 5px solid black;\n  float: right;\n  overflow: auto; }\n\n.side-content-right {\n  width: 100%;\n  height: 425px;\n  background: rgba(255, 255, 255, 0.8);\n  float: right;\n  overflow: auto; }\n\n.contents {\n  font-family: 'Bangers', cursive;\n  padding: 10px;\n  font-size: 30px;\n  color: white;\n  text-align: center; }\n\n.item {\n  float: left;\n  background: rgba(0, 0, 0, 0.8);\n  margin: 10px; }\n\n.sign-up {\n  display: none;\n  height: 200px;\n  width: 200px;\n  margin: 147px auto; }\n\n.input {\n  margin-top: 20px;\n  padding: 20px;\n  width: 400px;\n  background: rgba(255, 255, 255, 0.8);\n  font-size: 20px;\n  font-family: 'Bangers', cursive; }\n\n.input:focus {\n  outline: none; }\n\ntextarea {\n  border: 1px solid lightgrey; }\n\n#sign-up {\n  margin-left: -95px; }\n\n#sign-in {\n  margin-left: -95px; }\n\n#change-password {\n  margin-left: -54px; }\n\n.btn-one {\n  background: black;\n  color: white;\n  display: block;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  float: right;\n  margin-right: -106px;\n  margin-top: 10px;\n  padding: 13px 20px;\n  cursor: pointer; }\n\n.btn-two {\n  background: black;\n  color: white;\n  display: block;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  float: right;\n  margin-right: -106px;\n  margin-top: 10px;\n  padding: 13px 20px;\n  cursor: pointer; }\n\n.btn-three {\n  background: black;\n  color: white;\n  display: block;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  float: right;\n  margin-right: -50px;\n  margin-top: 10px;\n  padding: 13px 20px;\n  cursor: pointer; }\n\n.header-sign-up {\n  font-family: 'Bangers', cursive;\n  text-align: center; }\n\n.sign-in {\n  display: none;\n  height: 200px;\n  width: 200px;\n  margin: 200px auto; }\n\n.header-sign-in {\n  font-family: 'Bangers', cursive;\n  text-align: center; }\n\n.change-password {\n  display: none;\n  width: 296px;\n  margin: 113px auto; }\n\n.header-change-password {\n  font-family: 'Bangers', cursive;\n  text-align: center; }\n\n.sign-out {\n  font-family: 'Bangers', cursive;\n  display: none;\n  height: 200px;\n  width: 400px;\n  margin: 140px auto;\n  text-align: center; }\n\n.glyphicon {\n  color: white;\n  float: right;\n  margin: 9px; }\n\n.item {\n  max-width: 31.1%; }\n\n.contents {\n  outline: none;\n  cursor: pointer; }\n\n@media (min-width: 650px) {\n  .right-col {\n    width: calc(100% - 340px); }\n  .side-content {\n    width: 300px;\n    float: left; } }\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQuery"] = __webpack_require__(2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
]);