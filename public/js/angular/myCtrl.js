app.controller('myCtrl', function($scope, $interval, $http){
    $scope.name = "";
    
    $scope.products = ["Telephone", "Chair", "Table","Car"];
    
    $scope.startClock = function(){
        $scope.clock = Date();
        $interval(clo, 1000);
    };
    
    var clo = function(){
            $scope.clock = Date();
    };
    
    $interval(function(){
    $http({
        method: "GET",
        url: "/api"
    }).then(function mySucces(response){
         $scope.data = response.data;
    }, function myError(response){
        $scope.data = response.statusText;
    })}, 2000);
    
    var clear=function(){
        $scope.username="";
    };
    
    
    $scope.submit = function(username,password){
    $http({
        method: "POST",
        url: "/api",
        data:{"username":username,"password":password}
    }).then(function mySucces(response){
        clear();
    }, function myError(response){
        $scope.data = response.statusText;
    });
    };
    
    
   
});