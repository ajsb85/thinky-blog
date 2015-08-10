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
		vm.form = {};
		vm.submitComment = submitComment;
		vm.deleteComment = deleteComment;

		getPost(id);

		function getPost (id) {
			ThinkyBlogService.getPost(id)
				.then(function(data){					
					vm.post = data.post;
					return vm.post;
				})
		}

		function submitComment () {
			vm.form.postId = id;
			ThinkyBlogService.addComment()
				.then(function (data){
					$route.reload();
				});

		}

		function deleteComment (id, $event) {
			$event.preventDefault();
			$event.stopPropagation();
			ThinkyBlogService.deleteComment()
				.then(function (data){
					$route.reload();
				});
			return false;
		}
	}
})();