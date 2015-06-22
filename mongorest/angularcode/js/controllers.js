var rilApp = angular.module('readitlaterapp', []);
rilApp.controller('UrlListCtrl', function ($scope,$http) {
	var getUrl = 'http://localhost:8080/api/unread';
	var updateUrl = 'http://localhost:8080/api/update';

	$http.get(getUrl).then(function(r){
		if(r.data.length !== 0) {
			$scope.urlArrayJson = r.data;
		}else {
			alert('You do not have unread urls');
		}
	});

	$scope.update = function(urlJson) {
	  urlJson.read = true;
	  $http.post(updateUrl,urlJson).then(function(r){
		alert(r.data.data);
	  });
	  //remove read link from the array
	  //syntax of splice method array.splice(index,howmany,item1,.....,itemX),
	  // Here index => Required. An integer that specifies at what position to add/remove items,
	  //      Use negative values to specify the position from the end of the array
	  // Here howmany => Required. The number of items to be removed. If set to 0, no items will be removed
	  // Here item1, item2, ....,indexX => Optional. The new item(s) to be added to the array
	  $scope.urlArrayJson.splice($scope.urlArrayJson.
	  	indexOf(urlJson),1);
	};
});

