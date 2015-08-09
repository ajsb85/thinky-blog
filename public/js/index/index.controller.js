/**
* Index Controller
*/
(function(){
	'use strict';
	angular
		.module('myApp')
		.controller('IndexCtrl', indexCtrl);
	
	indexCtrl.$inject = ['$log', 'ThinkyBlogService']
	function indexCtrl($log, ThinkyBlogService) {
		var vm = this;

		getPosts();

		function getPosts () {
			ThinkyBlogService.getPosts()
				.then(function(data){
					vm.posts = data.posts;
					return vm.posts;
				})
		}
	}
})();