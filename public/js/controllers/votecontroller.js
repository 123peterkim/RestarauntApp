window.angular.module('ngff.controllers.vote', [])
    .controller('VoteController', ['$scope', '$resource', '$routeParams','$location', '$http', 'Global', 'Restaurant', '$cookieStore',
        function($scope, $resource, $routeParams, $location, $http, Global, Restaurant, $cookieStore) {


            $scope.find = function (query) {
                if ($cookieStore.get('restaurantVote') != 1) {
                    Restaurant.query(query, function (restaurantslist) {
                        $scope.restaurantslist = restaurantslist;
                    });
                    $scope.restaurantVoteClickCount = globalRestaurantVoteClickCount["JohnSmith"];
                    console.log("restaurantVoteClickCount = " + $scope.restaurantVoteClickCount);
                }
            };

            $scope.finditems = function (query) {
                if ($cookieStore.get('itemVote') != 1) {
                    Restaurant.query(query, function (itemslist) {
                        $scope.itemslist = itemslist[globalHighestVote].items;
                    });
                    //     console.log("restaurantItemClickCount = " + $scope.restaurantItemClickCount);
                }
            };

            $scope.vote = function () {
                $scope.restaurantVoteClickCount++
                console.log("2restaurantVoteClickCount = " + 
                    $scope.restaurantVoteClickCount);
                // globalRestaurantVoteClickCount["JohnSmith"]++;
                // console.log("globalRestaurantVoteClickCount = " + 
                //     globalRestaurantVoteClickCount["JohnSmith"]);

                // var votedrestaurant = $scope.restaurant.name

                // votedrestaurant.$update(function () {
                //     $location.path('voterestaurant/' + votedrestaurant);
                // });
                
                // var selectedrestaurant = $scope.name;
                // console.log("selected restaurant = " + selectedrestaurant);
                // console.log("selected restaurant = " + this.selectedrestaurant.name);
                // console.log("selected restaurant = " + $scope.selectedrestaurant);
                // $scope.selectedrestaurant = "sean's bday is today";
                var selrest = $scope.selectedrestaurant;
                console.log("selected restaurant = " + selrest);
                // globalHighestVote = getHighestVote(selectedrestaurant);
                globalHighestVote = getHighestVote(selrest);
                console.log("returned Global highest vote index = " + globalHighestVote);

                // Setting cookie for RestaurantVote
                $cookieStore.put('restaurantVote', 1);

                function getHighestVote(votedRestaurant){
                    if(restaurantVotes.length == 0){
                        for(var i=0; i<restaurantNames.length; i++) {
                            restaurantVotes[i] = 0;
                        }
                    }

                    for(var j=0; j<restaurantNames.length; j++) {
                        // console.log("checking restaurant: "+restaurantNames[j]);

                        if(votedRestaurant == restaurantNames[j]) {
                            ++restaurantVotes[j];
                            console.log("incremented restaurant "+votedRestaurant);
                            console.log("new count = "+restaurantVotes[j]);
                        }    }

                    var globalHighestVote = -1;

                    for(var i=0; i<restaurantNames.length; i++) {
                        console.log("restaurantvotes[i] = " + restaurantVotes[i]);

                        if(globalHighestVote < restaurantVotes[i]) {
                            console.log("found higher vote count: " + restaurantVotes[i]);
                            console.log("found higher restaurant: " + restaurantNames[i]);
                            globalHighestVote = restaurantVotes[i];
                            indexOfRestaurant = i;
                        }
                    }

                    // console.log("votes for "+restaurantNames[indexOfRestaurant]+" = "+indexOfRestaurant);
                    // console.log(restaurantNames[indexOfRestaurant]);
                    return indexOfRestaurant;
                };

                $scope.menu = function (query) {
                    Restaurant.query(query, function (itemslist) {
                        $scope.itemslist = itemslist[globalHighestVote].items;
                        $scope.showmenu = 1;
                    });
                    
                };
            };
}]);