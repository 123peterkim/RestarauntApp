window.angular.module('ngff.services.users', [])
    .factory('User', ['$resource',
        function($resource) {
            return $resource(
                'users/:usersId',
                {
                    usersId: '@_id'
                },
                {
                    update: { method : 'PUT' }
                }
            )
        }]);