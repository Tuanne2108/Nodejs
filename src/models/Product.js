const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Product = new Schema({
    name: { type: String, minLength: 1 },
    type: { type: String },
    image: { type: String },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", Product);
