const mongoose = require('mongoose');

let Schema = mongoose.Schema(
    {
        title: {type: String},
        image: {type: String},
        content: {type: String},
    }
);
