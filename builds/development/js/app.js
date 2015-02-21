(function() {

	var myApp = angular.module('myApp', ['ngRoute']);

	myApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'WindowSizeController'
			})
			.when('/register', {
				templateUrl: 'views/register.html',
			})
			.when('/meetings', {
				templateUrl: 'views/meetings.html',
			})
			.otherwise({
				redirectTo: '/'
			})
			;
	}]);

}());