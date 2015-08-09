/**
* Author Controller
*/
(function(){
	'use strict';
	angular
		.module('myApp')
		.controller('AuthorCtrl', authorCtrl);

	function authorCtrl() {
		console.log('cargo authorCtrl!');
	}
})();