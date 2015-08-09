/**
* Read Author Controller
*/
(function(){
	'use strict';
	angular
		.module('myApp')
		.controller('ReadAuthorCtrl', readAuthorCtrl);

	readAuthorCtrl.$inject = ['$log','$routeParams','ThinkyBlogService']		
	function readAuthorCtrl($log, $routeParams ,ThinkyBlogService) {
		var vm = this;
		var id = $routeParams.id;

		getAuthor(id);
		function getAuthor (id) {
			return ThinkyBlogService.getAuthor(id)
				.then(function(data){
					vm.author = data.author;
					return vm.author;
				});
		}
	}
})();