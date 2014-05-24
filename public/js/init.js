window.bootstrap = function () {
    angular.bootstrap(document, ['ngFantasyFootball']);
}

window.init = function () {
    window.bootstrap();
}

// Initialize global array for keeping track of user sessions
var allUserSessions = [];
// var restaurantVoteClickCount = 0;
// var restaurantItemClickCount = 0;


var globalRestaurantVoteClickCount = [];
var globalItemVoteClickCount = [];
globalRestaurantVoteClickCount["JohnSmith"] = 0;
console.log("globalRestaurantVoteClickCount = " + 
    globalRestaurantVoteClickCount["JohnSmith"]);
globalItemVoteClickCount["JohnSmith"] = 0;
// console.log("globalRestaurantItemClickCount = " + 
//     globalRestaurantItemClickCount["JohnSmith"]);

$(document).ready(function () {
	if (window.location.hash == "#_=_") window.location.hash = "";
    window.init();
});


function resetVotingArrays(){
    restaurantVotes = new Array();
}

var restaurantVotes = Array();
var restaurantCounts = new Array();
var indexOfRestaurant= 0;
var restaurantUsers = [];
var globalHighestVote = 0;
var showmenu = 0;

// var restaurantNames = new Array();
var restaurantNames = ['zPizza','Falafel Corner','Eastern Winds','Extreme Pita'];
var menuItems = Array();
var menuItemsForCurrentOrder = '';

var voted = 0, maxVotes = restaurantNames.length;

function initializeRestaurantList () {
    //get the list of restaurants
    //from the mongo restaurantcollection
    //code goes here

    //start with an empty array
    restaurantNames = new Array();

    //for each restaurant:
    //restaurantNames.push(restaurantName);
}


