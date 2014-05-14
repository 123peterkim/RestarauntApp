window.bootstrap = function () {
    angular.bootstrap(document, ['ngFantasyFootball']);
}

window.init = function () {
    window.bootstrap();
}

// Initialize global array for keeping track of user sessions
var allUserSessions = [];

$(document).ready(function () {
	if (window.location.hash == "#_=_") window.location.hash = "";
    window.init();
});
