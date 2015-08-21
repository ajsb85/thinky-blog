/**
* Add Author Controller
*/
(function(){
	'use strict';
	angular
		.module('myApp')
		.controller('AddAuthorCtrl', addAuthorCtrl);

	addAuthorCtrl.$inject = ['$log','$location','ThinkyBlogService']
	function addAuthorCtrl($log, $location, ThinkyBlogService) {
		var vm = this;
		vm.role = [{'name':'Viewer'},{'name':'Author'}];
		vm.form = {};
		vm.submitAuthor = submitAuthor;

		function submitAuthor() {			
			$log.debug('vm.form',vm.form);
			ThinkyBlogService.addAuthor(vm.form)
				.then(function(data){					
					$location.path('/authors');
				})
				.catch(function(e){
					$log.error('addAuthorCtrl',e);
				})
		}


	}
})();