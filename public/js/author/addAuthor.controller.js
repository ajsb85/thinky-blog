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
		vm.form = {};
		vm.submitAuthor = submitAuthor;

		function submitAuthor() {
			$log.debug('click submitAuthor');
			$log.debug('vm.form',vm.form);
			ThinkyBlogService.addAuthor(vm.form)
				.then(function(data){
					$log.info('addAuthorCtrl',data);
					$location.path('/authors');
				})
				.catch(function(e){
					$log.error('addAuthorCtrl',e);
				})
		}


	}
})();