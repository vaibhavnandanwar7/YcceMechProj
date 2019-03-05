(function() {
	'use strict'

	app.config(function($stateProvider, $urlRouterProvider) {
	    
	    $stateProvider.state('home', {
	            url: '/home',
	            templateUrl : "./app/home/home.html",
	        })
	        .state('experiments', {
	        	abstract: true,
	            url: '/experiments',
	            templateUrl : "./app/home/experimentsMain.html",
	        })
	        .state('experiments.exp1', {
	            url: '/exp1',
	            templateUrl : "./app/home/experiments1.html",
	        })
	        .state('experiments.exp2', {
	            url: '/exp2',
	            templateUrl : "./app/home/experiments2.html",
	        })
	        .state('experiments.home', {
	            url: '/expHome',
	            templateUrl : "./app/home/experimentsHome.html",
	        })
	        .state('apparatusUsed', {
	            url: '/apparatusUsed',
	            templateUrl : "./app/home/apparatusUsed.html",
	        })
	        .state('applications', {
	            url: '/applications',
	            templateUrl : "./app/home/applications.html",
	        })
	        .state('feedback', {
	            url: '/feedback',
	            templateUrl : "./app/home/feedback.html",
	        })
	        .state('contributers', {
	            url: '/contributers',
	            templateUrl : "./app/home/contributers.html",
	        })
	        .state('aboutUs', {
	            url: '/aboutUs',
	            templateUrl : "./app/home/aboutUs.html",
	        });
	        /* .state('experiments.paragraph', {
	            url: '/paragraph',
	            template: 'I could sure use a drink right now.'
	        })*/
	    $urlRouterProvider.otherwise('/home');
	});
	
/*	app.config(function($routeProvider) {
		$routeProvider.when("/", {
			templateUrl : "./app/home/home.html",
			//controller : "mainController"
		}).when("/experiments", {
			templateUrl : "./app/home/experiments.html",
			//controller : "searchResultsController"
		}).when("/experiment1", {
			templateUrl : "./app/home/experiments1.html",
			//controller : "searchResultsController"
		}).when("/experiment2", {
			templateUrl : "./app/home/experiments2.html",
			//controller : "searchResultsController"
		}).when("/apparatusUsed", {
			templateUrl : "./app/home/apparatusUsed.html",
			//controller : "searchResultsController"
		}).when("/applications", {
			templateUrl : "./app/home/applications.html",
			//controller : "searchResultsController"
		}).when("/feedback", {
			templateUrl : "./app/home/feedback.html",
			//controller : "searchResultsController"
		}).when("/contributers", {
			templateUrl : "./app/home/contributers.html",
			//controller : "searchResultsController"
		}).when("/aboutUs", {
			templateUrl : "./app/home/aboutUs.html",
			//controller : "searchResultsController"
		}).when("/contact", {
			templateUrl : "./app/home/contact.html",
			controller : "contactController"
		});
	});*/
	
	
})();
