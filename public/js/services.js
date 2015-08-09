(function(){
	'use strict';

	angular
		.module('thinkyBlog.service', [])
		.constant('URI',{
			AUTHOR : '/api/author/',
			AUTHORS : '/api/authors',
			COMMENT : '/api/comment',
			POSTS : '/api/posts',	
			POST_AUTHORS : '/api/post_and_authors/'	

		})		
		.factory('ThinkyBlogService', thinkyBlog);

	thinkyBlog.$inject = ['$http','$log', 'URI']
	function thinkyBlog ($http, $log, URI){

		return {
			getAuthors 	: getAuthors,
			getAuthor 	: getAuthor,
			addAuthor 	: addAuthor,
			editAuthor 	: editAuthor
		}
		
		/**
		* @description Get all authors.
		* @param none.
		*/
		function getAuthors () {
			var request = $http({
				method : 'GET',
				url : URI.AUTHORS
			});			
			return request.then(function(response){				
				return response.data;
			})
		}

		/**
		* @description Get author by id.
		* @param author id.
		*/
		function getAuthor (id) {
			var request = $http({
				method : 'GET',
				url : URI.AUTHOR + id
			});
			return request.then(function(response){
				$log.debug('getAuthor - service',response);
				return response.data;
			})
		}

		/**
		* @description Add new Author.
		* @param obj - Author to add
		*/
		function addAuthor (obj) {
			var request = $http({
				method : 'POST',
				url : URI.AUTHOR,
				data : obj
			});			
			return request.then(function(response){				
				return response.data
			});
		}

		/**
		* @description Edit author
		* @param id - Author Id.
		* @param obj - Author to edit
		*/
		function editAuthor (id, obj) {
			var request = $http({
				method : 'PUT',
				url : URI.AUTHOR + id,
				data : obj
			});

			return request.then(function(response){
				$log.debug('editAuthor - service',response);
				return response.data;
			});
		}
		

		


	}

})();
