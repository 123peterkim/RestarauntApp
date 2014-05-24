window.angular.module('ngff.controllers.order', [])
    .controller('OrderController', ['$scope','$routeParams','$location','Global','Order', 'Restaurant', '$cookieStore',
        function ($scope, $routeParams, $location, Global, Order, Restaurant, $cookieStore) {
            $scope.global = Global;

            $scope.itemVoteCount = function () {
                if ($cookieStore.get('itemVote') != 1) {
                    var itemVoteClickCount = globalItemVoteClickCount["JohnSmith"];
                    $scope.itemVoteClickCount = itemVoteClickCount;
                    console.log("before vote item vote count = " + itemVoteClickCount);
                }
            };

            $scope.create = function () {

                var order = new Order({
                        selectedrestaurant: this.selectedrestaurant,
                        menuItem: this.selecteditem,
                        specialRequest: this.specialRequest
                    });

                order.$save(function (response) {
                    $location.path("order/");
                });

                $scope.itemVoteClickCount++;
                console.log("after vote item vote count = " + $scope.itemVoteClickCount);

                $cookieStore.put('itemVote', 1);
            };

            $scope.find = function (query) {
                Order.query(query, function (order) {
                    $scope.order = order;
                });
            };

            $scope.destroyOrder = function (order) {
                order.$remove();
                    for (var item in $scope.order) {
                    if ($scope.order[item] == order) {
                    $scope.order.splice(item, 1)
                    }
                }
            };

            $scope.destroyAll = function (order) {
                order.$remove();
                    for (var item in $scope.order) {
                    if ($scope.order[item] == order) {
                    $scope.order.splice(item, order.length);
                    }
                }
                console.log(order)
            };

            $scope.findOne = function () {
                Order.get({ orderId: $routeParams.orderId }, function (order) {
                    $scope.order = order;
                });
            };

            $scope.reset = function () {
                $cookieStore.put('restaurantVote', 0);
                $cookieStore.put('itemVote', 0);
                var restaurantVote = $cookieStore.get('restaurantVote');
                var itemVote = $cookieStore.get('itemVote');
                console.log("reset restaurantVote = " + restaurantVote);
                console.log("reset itemVote = " + itemVote);
            }

        }]);

