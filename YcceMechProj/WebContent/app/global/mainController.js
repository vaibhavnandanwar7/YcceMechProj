
app.controller('mainController', function($scope, $location, $rootScope,$http,$state) {

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
				if(currentLocation =="/experiments"){
					$scope.showExpList = true;
					var x = document.getElementsByClassName("fade2");
					if(x && x.length){
						document.getElementsByClassName("fade2")[0].style.display='none';
						document.getElementsByClassName("fade2")[1].style.display='none';
					}
				}else{
					$scope.showExpList = false;
					document.getElementsByClassName("fade2")[0].style.display='block';
					document.getElementsByClassName("fade2")[1].style.display='block';
				}
		});
	
	/**EXPERIMENTS*/
	$scope.showExperiment = function(){
		$scope.showExpList = !$scope.showExpList;
	};
	$scope.experimentsList = [{"expName":"Scope of metrology laboratory and introduction of all metrological hand instruments and precision measuring instruments","expAdd":".exp1"},
							{"expName":"Study of slip gauges and its uses description of slip gauges","expAdd":".exp2"},
							{"expName":"To find the half tapered angle of work piece using sine bar","expAdd":".exp3"},
							{"expName":"To find the effective diameter of a thread by two wire method with the help of floating carraige diameter measuring machine","expAdd":".exp4"},
							{"expName":"Design of limit gauges","expAdd":".exp5"},
							{"expName":"To find the various parameter of screw thread using tool maker’s microscope","expAdd":".exp6"},
							{"expName":"To study control chart","expAdd":".exp7"},
							{"expName":"Study of flatness of surface using monochromatic light with the help of fringe pattern","expAdd":".exp8"},
							{"expName":"To study the profile of a given work piece using on optical profile projector","expAdd":".exp9"},
							{"expName":"Measure the surface roughness of a given workpiece","expAdd":".exp10"},
							{"expName":"Draw the tolerance chart for given operation","expAdd":".exp11"}];
	
	 $http.get('./app/global/connection.properties').then(function (response) {
	        console.log('a is ', response.data.a);
	        console.log('b is ', response.data.b);
	      });
	 
	 function warning()
	    {
	       var currentLocation = $location.url();
			var temp = currentLocation.split('/');
			if(temp[1] === 'experiments' && temp.length >2)
				$location.path('/experiments');
	    }
	    window.onbeforeunload = warning();
});
