/**
* Delete Post Controller
*/
(function(){
	'use strict';
	angular
		.module('myApp')
		.controller('DeletePostCtrl', deletePostCtrl);

	deletePostCtrl.$inject = ['$log','$location','$routeParams','ThinkyBlogService']
	function deletePostCtrl($log, $location, $routeParams, ThinkyBlogService) {
		var vm = this;
		var id = $routeParams.id

		vm.deletePost = deletePost;
		vm.home = goHome;

		getPost(id);

		function getPost (id) {
			ThinkyBlogService.getPost(id)
				.then(function (data) {
					vm.post = data.post;
					return vm.post;
				});
		}

		function deletePost () {			
			ThinkyBlogService.deletePost(id)
				.then(function (data) {
					$location.url('/');
				})
		}

		function goHome () {
			$location.url('/');
		}

	}
})();