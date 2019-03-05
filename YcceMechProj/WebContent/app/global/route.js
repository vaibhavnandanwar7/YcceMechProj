(function() {
	'use strict'

	app.config(function($stateProvider, $urlRouterProvider) {
	    
	    $stateProvider.state('home', {
	            url: '/home',
	            templateUrl : "./app/home/home.html",
	        })
	        .state('experiments', {
	        	/*abstract: true,*/
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
	        .state('experiments.exp3', {
	            url: '/exp3',
	            templateUrl : "./app/home/experiments2.html",
	        })
	        .state('experiments.exp4', {
	            url: '/exp4',
	            templateUrl : "./app/home/experiments2.html",
	        })
	        .state('experiments.exp5', {
	            url: '/exp5',
	            templateUrl : "./app/home/experiments2.html",
	        })
	        .state('experiments.exp6', {
	            url: '/exp6',
	            templateUrl : "./app/home/experiments2.html",
	        })
	        .state('experiments.exp7', {
	            url: '/exp7',
	            templateUrl : "./app/home/experiments2.html",
	        })
	        .state('experiments.exp8', {
	            url: '/exp8',
	            templateUrl : "./app/home/experiments2.html",
	        })
	        .state('experiments.exp9', {
	            url: '/exp9',
	            templateUrl : "./app/home/experiments2.html",
	        })
	        .state('experiments.exp10', {
	            url: '/exp10',
	            templateUrl : "./app/home/experiments2.html",
	        })
	        .state('experiments.exp11', {
	            url: '/exp11',
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
