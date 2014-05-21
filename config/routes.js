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
    app.del('/order/:orderId', auth.requiresLogin, order.destroyOrder)
    app.del('/order', auth.requiresLogin, order.destroy)

    app.param('orderId', order.order)


// Order archive CRUD
var orderarchive = require('../app/controllers/orderarchives')  
  app.get('/orderarchive', orderarchive.all)
  app.post('/orderarchive', auth.requiresLogin, orderarchive.create)
  app.get('/orderarchive/:orderarchiveId', orderarchive.show)
  app.put('/orderarchive/:orderarchiveId', auth.requiresLogin, orderarchive.update)
  app.del('/orderarchive/:orderarchiveId', auth.requiresLogin, orderarchive.destroy)
 
  app.param('orderarchiveId', orderarchive.orderarchive)
//Order archive CRUD end


    // home route
    var index = require('../app/controllers/index')
    app.get('/', index.render)

    // account management route
    app.get('/accountmanagement', users.accountmanagement)
    app.put('/voterestaurant/:restaurantname', users.update)
    // app.post('/')
}
