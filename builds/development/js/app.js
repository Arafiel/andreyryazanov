(function() {

	var myApp = angular.module('myApp', ['ngRoute']);

	myApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'WindowSizeController'
			})
			.when('/blog', {
				templateUrl: 'views/blog.html',
				controller: 'RedirectController'
			})
			.when('/about', {
				templateUrl: 'views/about.html'
			})
			.otherwise({
				redirectTo: '/'
			})
			;
	}]);

}());