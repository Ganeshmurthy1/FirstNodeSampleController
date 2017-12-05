var app = angular.module("rest",[]);
app.controller("RestController",function($scope,$http){


$scope.send = function(){
	var data = {'userid':$scope.id,'name':$scope.name,'age':$scope.age,'design':$scope.design}

	$http({'method':'post','url':'/api/users','data':data}).success(function(res){

		console.log("resp;onseapi",res);
	});
}
$scope.get = function(){
	$http({'method':'get','url':'/api/users'}).success(function(res){

		$scope.getUserList = res.data;
		console.log("$scope.getUserList",$scope.getUserList);
	});
}
$scope.Delete = function(object){
	
  $http({
            url: '/api/users/delete',
            method: 'POST',
            data:{id: object}, 
        }).success(function(res) {
            console.log('another success');
        }, function(error) {
            console.log(error);
            alert('here');
        });
}
});