/**
* Edit Post Controller
*/
(function(){
	'use strict';
	angular
		.module('myApp')
		.controller('EditPostCtrl', editPostCtrl);
	editPostCtrl.$inject = ['$log','$location','$routeParams','ThinkyBlogService'];
	function editPostCtrl($log,$location, $routeParams,ThinkyBlogService) {
		var vm = this;
		var id = $routeParams.id;
		vm.form = {};		
		vm.editPost = editPost

		postsAndAuthors(id);

		function postsAndAuthors (id) {
			$log.debug('postsAndAuthors id',id);
			ThinkyBlogService.postsAndAuthors(id)
				.then(function(data){
					vm.form = data.post;
					vm.form.authors = data.authors;
					return vm.form;					
				})
		}

		function editPost () {
			ThinkyBlogService.editPost(id, vm.form)
				.then(function(data){
					$location.url('/fullPost/' + $routeParams.id);
				})
		}
	}
})();