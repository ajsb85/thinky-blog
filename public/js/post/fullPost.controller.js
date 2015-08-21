/**
* Full Post Controller
*/
(function(){
	'use strict';
	angular
		.module('myApp')
		.controller('FullPostCtrl', fullPostCtrl);

	fullPostCtrl.$inject = ['$log','$route','$routeParams','ThinkyBlogService']
	function fullPostCtrl ($log,$route,$routeParams,ThinkyBlogService) {
		var vm = this;
		var id = $routeParams.id;		
		var commentForms = {
			0: 'No comment',
			one: '{} comment',
			other: '{} comments'
		};
		vm.commentForms = commentForms;
		vm.form = {};
		vm.submitComment = submitComment;
		vm.deleteComment = deleteComment;

		getPost(id);

		function getPost (id) {			
			ThinkyBlogService.getPost(id)
				.then(function (data){							
					vm.post = data.post;					
					return vm.post;					
				})
		}

		function submitComment () {			
			vm.form.postId = id;
			ThinkyBlogService.addComment(vm.form)
				.then(function (data){
					$route.reload();
				});
		}	

		function deleteComment (id, $event) {
			$event.preventDefault();
			$event.stopPropagation();
			ThinkyBlogService.deleteComment(id)
				.then(function (data){
					$route.reload();
				});
			return false;
		}
	}
})();