

	// Declare app level module which depends on filters, and services
	var app = angular.module('app', [], function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: '/partials/index',
		controller: IndexCtrl
		});

		$routeProvider.otherwise( { redirectTo: '/'} );

		// configure html5 to get links working
		// If you don't do this, you URLs will be base.com/#/home rather than base.com/home
		$locationProvider.html5Mode(true);
	});


;function IndexCtrl($scope, $http) {
	console.log('test');
}
