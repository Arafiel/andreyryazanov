(function() {

	var NavigationController = function($scope) {
		
		$scope.states = {};
		$scope.states.activeItem = 'item1'
		$scope.items = [
		{
			id: 'item1',
			title: 'Home'
		},
		{
			id: 'item2',
			title: 'Travel'
		},
		{
			id: 'item3',
			title: 'Blog'
		},
		{
			id: 'item4',
			title: 'Run'
		},
		{
			id: 'item5',
			title: 'About'
		}
		];

	};


	NavigationController.$inject = ['$scope'];

	angular.module('myApp')
		.controller('NavigationController', NavigationController);

}());