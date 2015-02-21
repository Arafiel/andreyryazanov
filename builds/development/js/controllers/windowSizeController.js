(function() {

	var WindowSizeController = function($scope, $window) {
		
		$scope.detectResize = function() {
			if ($window.innerWidth < 1281) {
				$scope.windowSize = "1280";
			}
			else if ($window.innerWidth < 1367) {
				$scope.windowSize = "1366";
			}
			else if ($window.innerWidth < 1921) {
						$scope.windowSize = "1920";
			}
			else {
				$scope.windowSize = "full";
			};
		};
		angular.element($window).bind("resize", function() {
			$scope.detectResize();
			$scope.$apply();
		})
		$scope.detectResize();

	};


	WindowSizeController.$inject = ['$scope', '$window'];

	angular.module('myApp')
		.controller('WindowSizeController', WindowSizeController);

}());