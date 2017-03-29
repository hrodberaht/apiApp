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
    
    
    $scope.submit = function(username,password){
        
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
       
        $http({
            method: "POST",
            url: "/api",
            data:{"username":username,"password":password}
        }).then(function mySucces(response){
        }, function myError(response){
            $scope.data = response.statusText;
        });
   
    };
    
   
});