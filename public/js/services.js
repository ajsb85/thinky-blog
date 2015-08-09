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
			addAuthor 	: addAuthor
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
		* @description Add new Author.
		* @param object.
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
		* @description 
		* @param 
		*/

		


	}

})();
