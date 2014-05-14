/**
 * Created by taylorcase on 5/6/14.
 */

window.angular.module('ngff.services.restaurant-add', [])
    .factory('Restaurant', ['$resource',
        function($resource) {
        return $resource(
            'restaurants/:restaurantId',
            {
                restaurantId: '@_id'
            },
            {
                update: { method : 'PUT' }
            }
        )
    }]);