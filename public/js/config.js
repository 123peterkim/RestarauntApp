//Setting up route
window.app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/',
    {
        templateUrl: 'views/index.html'
    })
    .when('/addrestaurant',
    {
        templateUrl: 'views/restaurant/addrestaurant.html'
    })
    .when('/removerestaurant',
    {
        templateUrl: 'views/restaurant/remove.html'
    })
    .when('/accountmanagement',
    {
        templateUrl: 'views/account/accountmanagement.html'
    })
    .when('/pendingorder',
    {
        templateUrl: 'views/archivedorders.html'
    })
    .when('/order',
    {
        templateUrl: 'views/order/list.html'
    })
    .when('/order/create',
    {
        templateUrl: 'views/order/create.html'
    })
    .when('/order/:orderId',
    {
        templateUrl: 'views/order/view.html'
    })
    .when('/voterestaurant',
    {
        templateUrl: 'views/restaurant/voterestaurant.html'
    })
    .when('/voterestaurant/:restaurantname',
    {
        templateUrl: 'views/restaurant/voterestaurant.html'
    })
	.otherwise({redirectTo: '/'});
}]);

//Removing tomcat unspported headers
window.app.config(['$httpProvider', function($httpProvider, Configuration) {
    //delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider', function($locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
}]);
