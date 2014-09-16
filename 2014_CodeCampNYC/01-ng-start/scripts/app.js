angular.module('ngStartApp',[])
.controller('gettingStartedController', function($scope){

	$scope.name = "CodeCamp NYC";
	$scope.topics = ['C#', 'Microsoft Azure'];
	$scope.newTopic = '';

	$scope.addTopic = function(){
		$scope.topics.push($scope.newTopic);
		$scope.newTopic = '';
		return false;
	};

});