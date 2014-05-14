/**
 * Created by taylorcase on 5/6/14.
 */

window.angular.module('ngff.services.archived-order-add', [])
    .factory('ArchivedOrder', ['$resource',
        function($resource) {
        return $resource(
            'archivedorders/:archivedOrderId',
            {
                archivedOrderId: '@_id'
            },
            {
                update: { method : 'PUT' }
            }
        )
    }]);