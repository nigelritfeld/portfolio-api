const mongoose = require('mongoose');

let Schema = mongoose.Schema(
    {
        title: {type: String},
        image: {type: String},
        description: {type: String},
    }
);
module.exports = mongoose.model('Page', Schema);
