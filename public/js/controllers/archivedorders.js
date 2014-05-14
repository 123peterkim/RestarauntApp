//var mongoose = require('mongoose');

window.angular.module('ngff.controllers.archivedorder-add', [])
    .controller('AddArchivedOrderController', ['$scope', '$resource', '$routeParams','$location', '$http', 'Global', 'ArchivedOrder',
        function($scope, $resource, $routeParams, $location, $http, Global, ArchivedOrder) {

            $scope.global = Global;
            //$scope.selectedRestaurant = 0;
            //$scope.selectedDetails = null;
            //$scope.newRestaurant = null;
            $scope.restItems = [];
            $scope.archivedorderList = [];
            //$scope.restaurantNames = [];
            //$scope.newRestaurantItems

            $http.get("/archivedorder").success(function (data, status, headers, config) {

                // Push restaurant objects into restaurants array
                //console.log("Selected restaurant " + $scope.selectedRestaurant);
                $scope.archivedorder = data[0];

                console.log("3archivedorder = " + $scope.archivedorder.items[0]);
//                console.log("Array item " + $scope.restaurants[0].items[1]);
                console.log("2restaurants array length " + $scope.restaurantList.length);
                console.log("Phone number " + $scope.restaurantList[0].phone);

                // Push restaurant name into restaurantNames array
                for (var x = 0; x < $scope.restaurantList.length; x++) {
                    $scope.restaurantNames.push($scope.restaurantList[x].name);
                }
            })
            .error(function(data, status, headers, config) {
                console.log("Failure " + status);
            });

//            // FIND
            $scope.find = function (query) {
                Restaurant.query(query, function (restaurantslist) {
                    $scope.restaurantslist = restaurantslist;
                });
            };

            $scope.addNewOrderItem = function () {
                $scope.restItems.push(
                    $scope.restItem
                );
                console.log("1newitems: "+$scope.restItems);
            }

            $scope.setValueOfIdx = function($index){
                $scope.idx = $index;
            }

            // CRUD_CREATE
            $scope.createRestaurant = function () {
              // the capital Restaurant comes from the factory called 
              // Restaurant in the restaurant-add.js file under services folder
              var restaurant = new Restaurant({
                
                // (key from mongoose schema): this.(ng model input from html)
                name: this.restaurant.name,
                phone: this.restaurant.phone,
                items: this.restaurant.items
              });

              restaurant.$save(function (response) {
                $location.path("restaurants/" + response._id);
              });

              // MUST ALWAYS BE BLANK
              this.name = "";
              this.phone = "";
              this.items = [];
            };
            // END CRUD_CREATE

            $scope.populateRestaurants = function(query) {
              console.log("this function performs no initialization")
              // Leagues.query(query, function (leagues) {
              //   $scope.leagues = leagues;
              // });
            };

            $scope.findOne = function () {
              Restaurant.get({ restaurantId: $routeParams.restaurantId }, function (restaurant) {
                $scope.restaurant = restaurant;
              });
            };
}]);