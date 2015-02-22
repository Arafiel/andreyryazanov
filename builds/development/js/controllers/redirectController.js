(function() {

	var RedirectController = function($scope, $window) {
		
		$window.location.href = 'https://www.tumblr.com/blog/andreylearnswebdevelopment';

	};


	RedirectController.$inject = ['$scope', '$window'];

	angular.module('myApp')
		.controller('RedirectController', RedirectController);

}());