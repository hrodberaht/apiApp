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
    
    $http({
        method: "GET",
        url: "/api"
    }).then(function mySucces(response){
         $scope.data = response.data;
    }, function myError(response){
        $scope.data = response.statusText;
    });
    
    
});