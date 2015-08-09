/**
* Delete Author Controller
*/
(function(){
	'use strict';
	angular
		.module('myApp')
		.controller('DeleteAuthorCtrl', deleteAuthorCtrl);

	deleteAuthorCtrl.$inject = ['$log','$location','$routeParams','ThinkyBlogService'];
	function deleteAuthorCtrl ($log,$location ,$routeParams, ThinkyBlogService) {
		var vm = this;
		var id = $routeParams.id;
		vm.deleteAuthor = deleteAuthor;
		vm.home = goHome;

		getAuthor(id);

		function getAuthor (id) {
			return ThinkyBlogService.getAuthor(id)
				.then(function(data){
					vm.author = data.author;
					return vm.author;
				});
		}

		function deleteAuthor () {
			ThinkyBlogService.deleteAuthor(id)
				.then(function(data){
					$location.url('/authors');
				});
		}

		function goHome () {
			$location.url('/authors');
		}
		

	}	
})();