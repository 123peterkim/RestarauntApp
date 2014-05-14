/**
 * Created by josecontreras on 5/8/14.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// An item in the Schema consist of a pair of strings seperated by a :
// for example: "tom : pizza"
var archivedOrdersSchema = new Schema({
    name: String,
    phone: String,
    date: String,
    items: [
        String
    ],
    url: String
});

module.exports = mongoose.model('Restaurants',archivedOrdersSchema);
