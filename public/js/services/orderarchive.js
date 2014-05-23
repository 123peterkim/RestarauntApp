window.angular.module('ngff.services.orderarchive', [])
  .factory('OrderArchive', ['$resource',
    function($resource){
      return $resource(
        'orderarchive/:orderarchiveId',
        {
          orderarchiveId:'@_id'
        },
        {
          update: {method: 'PUT'}
        }
      )
    }]);