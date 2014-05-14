window.angular.module('ngff.services.order', [])
    .factory('Order', ['$resource',
        function($resource){
            return $resource(
                'order/:orderId',
                {
                    orderId:'@_id'
                },
                {
                    update: {method: 'PUT'}
                }
            )
        }]);