
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , User = mongoose.model('User')

//exports.signin = function (req, res) {}

/**
 * Auth callback
 */

exports.authCallback = function (req, res, next) {
    console.log(req.session)
    console.log("User session " + User.session)
  res.redirect('/')
}

/**
 * Show login form
 */

exports.signin = function (req, res) {
    console.log(req.session)
    console.log("User session " + User.session)
  res.render('users/signin', {
    title: 'Signin',
    message: req.flash('error')
  })
}

/**
 * Show sign up form
 */

exports.signup = function (req, res) {
  res.render('users/signup', {
    title: 'Sign up',
    user: new User()
  })
}

/**
 * Logout
 */

exports.signout = function (req, res) {
  req.logout()
  res.redirect('/')
}

/**
 * Session
 */

exports.session = function (req, res) {
    console.log("1User session = " + User.session);
    console.log("2User name = " + req.user);
    console.log("5User name = " + req.user.username);
    // req.user.restaurantVoteClickCount = 0;
    // console.log("restaurantVoteClickCount = " + 
    //   req.user.restaurantVoteClickCount);

    // req.user.restaurantItemClickCount = 0;
    // console.log("restaurantItemClickCount = " + 
    //   req.user.restaurantItemClickCount);

    // globalRestaurantVoteClickCount["JohnSmith"] = 0;
    // console.log("5globalRestaurantVoteClickCount = " + 
    //   globalRestaurantVoteClickCount["JohnSmith"])
    // globalRestaurantItemClickCount["JohnSmith"] = 0;
  res.redirect('/')
}

/**
 * Create user
 */

exports.create = function (req, res) {
  var user = new User(req.body)
  user.provider = 'local'
  user.save(function (err) {
    if (err) {
      return res.render('users/signup', { errors: err.errors, user: user })
    }
    req.logIn(user, function(err) {
      if (err) return next(err)
      return res.redirect('/')
    })
  })
}

/**
 *  Show profile
 */

exports.show = function (req, res) {
  var user = req.profile
  res.render('users/show', {
    title: user.name,
    user: user
  })
}

exports.me = function (req, res) {
  res.jsonp(req.user || null);
}

/**
 * Find user by id
 */

exports.user = function (req, res, next, id) {
  User
    .findOne({ _id : id })
    .exec(function (err, user) {
      if (err) return next(err)
      if (!user) return next(new Error('Failed to load User ' + id))
      req.profile = user
      next()
    })
}

exports.accountmanagement = function (req, res) {
  res.render('users/accountmanagement')
}

exports.update = function(req, res){

  vote.save(function(err) {
    res.jsonp(1)
  })
}