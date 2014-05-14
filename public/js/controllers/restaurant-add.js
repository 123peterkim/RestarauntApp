//var mongoose = require('mongoose');

window.angular.module('ngff.controllers.restaurant-add', [])
    .controller('AddRestaurantController', ['$scope', '$resource', '$routeParams','$location', '$http', 'Global', 'Restaurant',
        function($scope, $resource, $routeParams, $location, $http, Global, Restaurant) {

            $scope.global = Global;
            $scope.selectedRestaurant = 0;
            $scope.selectedDetails = null;
            $scope.newRestaurant = null;
            $scope.restItems = [];
            $scope.restaurantList = [];
            $scope.restaurantNames = [];
            $scope.newRestaurantItems

            $http.get("/restaurants").success(function (data, status, headers, config) {

                // Push restaurant objects into restaurants array
                console.log("Selected restaurant " + $scope.selectedRestaurant);
                $scope.restaurantList = data;

                console.log("3restaurants = " + $scope.restaurantList[0].items[0]);
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

            $scope.addNewRestItem = function () {
                $scope.restItems.push(
                    $scope.restItem
                );
                console.log("1newitems: "+$scope.restItems);
            }

            $scope.addNewRestaurant = function() {
              if($scope.newRestaurant != null && $scope.newRestaurant != "") {
                  if ($scope.restItems != null && $scope.restItems != "") {
                      console.log("Restaurant Name: " + $scope.newRestaurant);

                      // create a literal object for the new restaurant
                      var newRestObj = {
                          id: $scope.restaurantList.length,
                          name: $scope.newRestaurant,
                          items: $scope.restItems
                      };

                      // insert new restaurant into database collection


                      // append new restaurant to javascript array
                      $scope.restaurantList.push({
                          id: $scope.restaurantList.length,
                          name: $scope.newRestaurant,
                          items: $scope.restItems
                      });

                      console.log("2newitems: " + $scope.restItems);
                      $scope.restItems = [];
                  }
                  else {
                      alert("Please enter at least one item!");
                  }
              }
              else {
                  alert("Please enter a restaurant name!");
              }
            }

            $scope.removeRestaurant = function($index) {
                console.log('length before: '+$scope.restaurants.length);
                $scope.restaurants.splice($index,1);
                console.log('length after: '+$scope.restaurants.length);
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

            $scope.remove = function (restaurant) {
              restaurant.$remove();
              for (var i in $scope.restaurantslist) {
                if ($scope.restaurantslist[i] == restaurant) {
                  $scope.restaurantslist.splice(i, 1)
                }
              }
            };
}]);