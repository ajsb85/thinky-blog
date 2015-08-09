/**
* Add Post Controller
*/
(function(){
	'use strict';
	angular
		.module('myApp')
		.controller('AddPostCtrl', addPostCtrl);

	function addPostCtrl() {
		console.log('cargo addPostCtrl!');
	}
})();