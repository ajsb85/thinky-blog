(function(){
	'use strict';

	angular
		.module('thinkyBlog.service', [])
		.constant('URI',{
			AUTHOR : '/api/author/',
			AUTHORS : '/api/authors',
			COMMENT : '/api/comment',
			POST : '/api/post/',	
			POSTS : '/api/posts/',
			POST_AUTHORS : '/api/post_and_authors/'	

		})		
		.factory('ThinkyBlogService', thinkyBlog);

	thinkyBlog.$inject = ['$http','$log', 'URI']
	function thinkyBlog ($http, $log, URI){

		return {
			// Authors
			getAuthors 	: getAuthors,
			getAuthor 	: getAuthor,
			addAuthor 	: addAuthor,
			editAuthor 	: editAuthor,
			deleteAuthor: deleteAuthor,
			// Posts
			getPosts    : getPosts,
			addPost     : addPost,
			editPost    : editPost,
			// Others
			postsAndAuthors : postsAndAuthors

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
		* @param obj - Author to edit.
		*/
		function editAuthor (id, obj) {
			var request = $http({
				method : 'PUT',
				url : URI.AUTHOR + id,
				data : obj
			});

			return request.then(function(response){				
				return response.data;
			});
		}

		/**
		* @description Delete  author
		* @param id - Author id.
		*/
		function deleteAuthor (id) {
			var request = $http({
				method : 'DELETE',
				url : URI.AUTHOR + id
			});

			return request.then(function(response){				
				return response.data;
			})
		}
		
		/**
		* @description - Get all Posts
		* @param - none
		*/
		function getPosts () {
			var request = $http({
				method : 'GET',
				url : URI.POSTS
			});			
			return request.then(function(response){				
				return response.data;
			})
		}

		/**
		* @description Add new Post.
		* @param obj - Post to add.
		*/
		function addPost (obj) {
			var request = $http({
				method : 'POST',
				url : URI.POST,
				data : obj
			});

			return request.then(function(response){
				return response.data;
			})
		}

		/**
		* @description Edit post
		* @param id - Post id.
		* @param obj - Post to edit.
		*/
		function editPost (id, obj) {
			var request = $http({
				method : 'PUT',
				url : URI.POST + id,
				data : obj
			});

			return request.then(function(response){				
				return response.data;
			});			
		}

		function postsAndAuthors (id) {
			var request = $http({
				method : 'GET',
				url : URI.POST_AUTHORS + id				
			});

			return request.then(function(response){				
				return response.data;
			});				
		}


	}

})();
