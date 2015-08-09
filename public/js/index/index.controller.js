/**
* Index Controller
*/
(function(){
	'use strict';
	angular
		.module('myApp')
		.controller('IndexCtrl', indexCtrl);

	function indexCtrl() {
		console.log('cargo!');
	}
})();