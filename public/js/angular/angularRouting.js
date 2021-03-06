app.config(function($routeProvider,$locationProvider){
    $routeProvider
    .when("/admin/", {
      templateUrl: "public/js/angular/admin.html",  
    })
    .when("/admin/home/about",{
      templateUrl: "public/js/angular/about.html",
    })
    .otherwise({
        redirectTo: '/login'
    });
    
    $locationProvider.html5Mode(true);
});
