/**
* Add Post Controller
*/
(function(){
	'use strict';
	angular
		.module('myApp')
		.controller('AddPostCtrl', addPostCtrl);

	addPostCtrl.$inject = ['$log','$location',"ThinkyBlogService"]
	function addPostCtrl($log,$location,ThinkyBlogService) {
		var vm = this;
		vm.form = {};
		vm.submitPost = submitPost;

		getAuthors();

		function getAuthors () {
			ThinkyBlogService.getAuthors()
				.then(function(data){
					vm.authors = data.authors;
				});				
		}

		function submitPost () {
			ThinkyBlogService.addPost(vm.form)
				.then(function(data){
					$location.path('/');
				});
		}
	}

})();