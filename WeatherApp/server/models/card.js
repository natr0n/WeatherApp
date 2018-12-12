var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
    id: {type: String, required: true},
    city: {type: String},
    image: {type: String},
    temp: {type: String},
    min: {type: String},
    max: {type: String}
});

module.exports = mongoose.model('Card', schema);