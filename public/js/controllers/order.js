window.angular.module('ngff.controllers.order', [])
    .controller('OrderController', ['$scope','$routeParams','$location','Global','Order', 'Restaurant',
        function ($scope, $routeParams, $location, Global, Order, Restaurant) {
            $scope.global = Global;

            $scope.create = function () {
                var order = new Order({
                    selectedrestaurant: this.selectedrestaurant,
                    menuItem: this.selecteditem,
                    specialRequest: this.order.specialRequest
                });

                order.$save(function (response) {
                    $location.path("order/");
                });
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

        }]);

