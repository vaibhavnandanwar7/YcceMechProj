
app.controller('mainController', function($scope, $location, $rootScope) {

	$scope.isChangeActive = false;
	$scope.activeMenu = '';
	$scope.showExpList = true;
	
	/** To make element fade In-Out on scroll*/
	$(window).scroll(function(){
	    $(".home").css("opacity", 1 - $(window).scrollTop() / 100);
	  });
	/*$(window).scroll(function(){
        $("#hero-image").css("opacity", 1 - $(window).scrollTop() / ($('#hero-image').height() / 2));
    });*/
	
	/**Menu Button - Cross Button */
	$scope.myFunction = function () {
	    $scope.isChangeActive =!$scope.isChangeActive;
	};
	
	$scope.$on("$locationChangeSuccess",function handleLocationChangeSuccessEvent(event) {
				var currentLocation = $location.url();
				switch (currentLocation) {
	            case '/experiments':
	            	$scope.activeMenu = 'Experiment';
	                break;
	            case '/apparatusUsed':
	            	$scope.activeMenu = 'Apparatus Used';
	                break;
	            case '/applications':
	            	$scope.activeMenu = 'Applications';
	                break;
	            case '/feedback':
	            	$scope.activeMenu = 'Feedback';
	                break;
	            case '/contributers':
	            	$scope.activeMenu = 'Contributers';
	                break;
	            case '/aboutUs':
	            	$scope.activeMenu = 'About Us';
	                break;
	           default:
	            	$scope.activeMenu = '';
	                break;
	        }
				if(currentLocation =="/experiments")
					$scope.showExpList = true;
				else
					$scope.showExpList = false;
		});
	
	/**EXPERIMENTS*/
	$scope.showExperiment = function(){
		$scope.showExpList = !$scope.showExpList;
	};
	$scope.experimentsList = [{"expName":"Experiment 1","expAdd":".exp1"},
							{"expName":"Experiment 2","expAdd":".exp2"},
							{"expName":"Experiment 3","expAdd":".exp3"},
							{"expName":"Experiment 4","expAdd":".exp4"},
							{"expName":"Experiment 5","expAdd":".exp5"},
							{"expName":"Experiment 6","expAdd":".exp6"},
							{"expName":"Experiment 7","expAdd":".exp7"},
							{"expName":"Experiment 8","expAdd":".exp8"},
							{"expName":"Experiment 9","expAdd":".exp9"},
							{"expName":"Experiment 10","expAdd":".exp10"}];
	
});
