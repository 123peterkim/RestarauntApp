window.angular.module('ngff.controllers.users', [])
    .controller('UserController', ['$scope', '$resource', '$routeParams','$location', '$http', 'Global', 'User',
        function($scope, $resource, $routeParams, $location, $http, Global, User) {

            $scope.showSessions = function() {
                console.log("User session = " + User.get(session))
            }

//            $scope.signIn = function () {
//                $location.path("users/session");
//            }
        }]);