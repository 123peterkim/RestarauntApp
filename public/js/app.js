
window.app = angular.module('ngFantasyFootball', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ngRoute', 'ngff.controllers', 'ngff.directives', 'ngff.services']);

// bundling dependencies
window.angular.module('ngff.controllers', ['ngff.controllers.header','ngff.controllers.index', 'ngff.controllers.restaurant-add', 'ngff.controllers.users', 'ngff.controllers.order', 'ngff.controllers.vote', 'ngff.controllers.orderarchive']);
window.angular.module('ngff.services', ['ngff.services.global', 'ngff.services.restaurant-add', 'ngff.controllers.users', 'ngff.services.order', 'ngff.services.orderarchive']);


