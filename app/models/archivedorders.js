/**
 * Created by taylorcase on 5/7/14.
 */

var mongoose = require('mongoose')
    , env = process.env.NODE_ENV || 'development'
    , config = require('../../config/config')[env]
    , Schema = mongoose.Schema;

// CRUD_CREATE, CRUD_UPDATE, CRUD_DELETE
var ArchivedOrderSchema = new Schema({
    name: String,
    phone: String,
    items: [
        String
    ]
});
// END CRUD_CREATE, CRUD_UPDATE, CRUD_DELETE



ArchivedOrderSchema.statics = {
    load: function(id, cb) {
        this.findOne({ _id : id }).populate('archivedorder').exec(cb);
    }
};

mongoose.model('ArchivedOrderSchema', ArchivedOrderSchema);