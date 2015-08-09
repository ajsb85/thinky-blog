/**
* Author Controller
*/
(function(){
	'use strict';
	angular
		.module('myApp')
		.controller('AuthorCtrl', authorCtrl);

	authorCtrl.$inject = ['$log','$location','ThinkyBlogService']
	function authorCtrl($log, $location, ThinkyBlogService) {
		var vm = this;		

		getAuthors();

		function getAuthors(){
			return ThinkyBlogService.getAuthors()
				.then(function(data){					
					vm.authors = data.authors;					
					return vm.authors
				})
		}

	}
})();