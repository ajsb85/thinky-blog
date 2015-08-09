(function(){
	'use strict';
	angular
		.module('myApp')
		.config(routesApp);

	routesApp.$inject = ['$routeProvider','$locationProvider']
	function routesApp ($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/index',
        controller: 'IndexCtrl',
        controllerAs : 'ctrl'
      }).
      when('/addPost', {
        templateUrl: 'partials/addPost',
        controller: 'AddPostCtrl',
        controllerAs : 'ctrl'
      }).
      when('/fullPost/:id', {
        templateUrl: 'partials/fullPost',
        controller: 'FullPostCtrl',
        controllerAs : 'ctrl' 
      }).
      when('/editPost/:id', {
        templateUrl: 'partials/editPost',
        controller: 'EditPostCtrl',
        controllerAs : 'ctrl'
      }).
      when('/deletePost/:id', {
        templateUrl: 'partials/deletePost',
        controller: 'DeletePostCtrl',
        controllerAs : 'ctrl'
      }).
      when('/authors', {
        templateUrl: 'partials/authors',
        controller: 'AuthorCtrl',
        controllerAs : 'ctrl'
      }).
      when('/editAuthor/:id', {
        templateUrl: 'partials/editAuthor',
        controller: 'EditAuthorCtrl',
        controllerAs : 'ctrl'
      }).
      when('/addAuthor', {
        templateUrl: 'partials/addAuthor',
        controller: 'AddAuthorCtrl',
        controllerAs : 'ctrl'
      }).
      when('/readAuthor/:id', {
        templateUrl: 'partials/readAuthor',
        controller: 'ReadAuthorCtrl',
        controllerAs : 'ctrl'
      }).
      when('/deleteAuthor/:id', {
        templateUrl: 'partials/deleteAuthor',
        controller: 'DeleteAuthorCtrl',
        controllerAs : 'ctrl'
      }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }

})();