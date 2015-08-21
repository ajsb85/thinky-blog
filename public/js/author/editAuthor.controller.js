/**
* Edit Author Controller
*/
(function(){
	'use strict';
	angular
		.module('myApp')
		.controller('EditAuthorCtrl', editAuthorCtrl);

	editAuthorCtrl.$inject = ['$log','$location','$routeParams','ThinkyBlogService']
	function editAuthorCtrl($log, $location, $routeParams, ThinkyBlogService) {
		var vm = this;
		var id = $routeParams.id;		
		vm.form = {};
		vm.role = [{'name':'Viewer'},{'name':'Author'}];
		vm.editAuthor = editAuthor;

		getAuthorById(id);

		function getAuthorById(id) {
			return ThinkyBlogService.getAuthor(id)
				.then(function(data){
					vm.form = data.author;
					return vm.form;
				})
		}

		function getAuthors(){
			return ThinkyBlogService.getAuthors()
				.then(function(data){					
					vm.authors = data.authors;					
					return vm.authors;
				})
		}

		function editAuthor(){
			return ThinkyBlogService.editAuthor(id, vm.form)
				.then(function(data){
					$log.debug('author edited: ',data);
					$location.url('/readAuthor/' + id);
				})
		}
	}
})();