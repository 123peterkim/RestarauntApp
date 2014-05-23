window.angular.module('ngff.controllers.orderarchive', [])
  .controller('OrderArchiveController', ['$scope','$routeParams','$location','Global','OrderArchive','Restaurant','Order',
    function ($scope, $routeParams, $location, Global, OrderArchive, Restaurant, Order) {
      $scope.global = Global;

$scope.setValueOfIdx = function($index){
              $scope.idx = $index;
}

 $scope.submit = function () {
  var order = $scope.order;
    // console.log('orderItems = '+ this.order[0].menuItem);
    console.log('order object: ' + this.order);
    for(var x = 0; x < order.length; x++) {
      console.log('menu item ' + x + ': ' + order[x].menuItem);
    }
 }
 
 $scope.create = function () {
  var order = $scope.order;
  var orderList = [];
  for(var x = 0; x < order.length; x++) {
      orderList.push(order[x].menuItem);
      console.log('menu item ' + x + ': ' + orderList[x]);
    }

  var specialRequest = $scope.specialRequest;
  var specialRequestList = [];
  for(var i = 0; i < order.length; i++) {
      specialRequestList.push(order[i].specialRequest);
      console.log('specialRequest ' + i + ': ' + specialRequestList[i]);
    }
    var order = $scope.order;
    var orderarchive = new OrderArchive({ 
      date: new Date(),
      selectedrestaurant: this.order[0].selectedrestaurant,
      menuItem: [
        orderList
        // this.order[0].menuItem, 
        // this.order[1].menuItem, 
        // this.order[2].menuItem,
        // this.order[3].menuItem, 
        // this.order[4].menuItem, 
        // this.order[5].menuItem   

      ],
      specialRequest: [
        specialRequestList
      ]
      // specialRequest: this.order[0].specialRequest
    });
 
    orderarchive.$save(function (response) {
      $location.path("orderarchive/" + response._id);
    });
 
    this.order = [];
    this.order.specialRequestList = [];
    // this.order.menuItem = "";
    // this.order.specialRequest = "";
    console.log('Reanitialized after archiving')
  };

  $scope.find = function (query) {
    OrderArchive.query(query, function (orderarchive) {
      $scope.orderarchive = orderarchive;
    });
  };

  $scope.findOne = function () {
  OrderArchive.get({ orderarchiveId: $routeParams.orderarchiveId }, function (orderarchive) {
    $scope.orderarchive = orderarchive;
  });
};

$scope.update = function () {
  var orderarchive = $scope.orderarchive;
  orderarchive.$update(function () {
    $location.path('orderarchive/' + orderarchive._id);
  });
};

$scope.destroy = function (orderarchive) {
  orderarchive.$remove();
  for (var item in $scope.orderarchive) {
    if ($scope.orderarchive[item] == orderarchive) {
      $scope.orderarchive.splice(item, 1)
    }
  }
};

}]);