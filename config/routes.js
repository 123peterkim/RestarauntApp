var async = require('async')

module.exports = function (app, passport, auth) {

    // user routes
    var users = require('../app/controllers/users')
    app.get('/signin', users.signin)
    app.get('/signup', users.signup)
    app.get('/signout', users.signout)
    app.post('/users', users.create)
    app.post('/users/session', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: 'Invalid email or password.' }), users.session)
    app.get('/users/me', users.me)
    app.get('/users/:userId', users.show)

    app.param('userId', users.user)

    // restaurant routes
    var restaurants = require('../app/controllers/restaurants')
    app.get('/restaurants', restaurants.all)
    // app.post('/restaurants', auth.requiresLogin, restaurants.create)
    // app.get('/restaurants/:restaurantId', auth.requiresLogin, restaurants.show)
    // app.put('/restaurants/:restaurantId', auth.requiresLogin, restaurants.update)
    // app.del('/restaurants/:restaurantId', auth.requiresLogin, restaurants.destroy)

    var archivedorders = require('../app/controllers/archivedorders')

    // CRUD_CREATE
    app.post('/restaurants', restaurants.create)
    app.post('/archivedorder', archivedorders.create)
    // END CRUD_CREATE

    app.get('/restaurants/:restaurantId', restaurants.show)
    app.put('/restaurants/:restaurantId', restaurants.update)
    app.del('/restaurants/:restaurantId', restaurants.destroy)


    app.param('restaurantId', restaurants.restaurant)

    //order crud
    var order = require('../app/controllers/order')
    app.get('/order', order.all)
    app.post('/order', auth.requiresLogin, order.create)
    app.get('/order/:orderId', order.show)

    app.param('orderId', order.order)


    // home route
    var index = require('../app/controllers/index')
    app.get('/', index.render)

    // account management route
    app.get('/accountmanagement', users.accountmanagement)
    app.put('/voterestaurant/:restaurantname', users.update)
    // app.post('/')
}
