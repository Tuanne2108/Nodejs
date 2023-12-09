const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const Product = new Schema(
    {
        _id: { type: Number },
        name: { type: String, required: true },
        type: { type: String },
        image: { type: String },
        price: {
            type: String,
            pattern: "^(0|([1-9]+[0-9]*))(.[0-9]{1,2})?$",
            minLength: 1,
        },
        videoId: { type: String },
        imageId: { type: String },
        slug: { type: String, slug: "name", unique: true },
    },
    {
        timestamps: true,
        _id:false
    }
);
//Plugins
mongoose.plugin(slug);
Product.plugin(AutoIncrement);
mongoose.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: "all",
});

module.exports = mongoose.model("Product", Product);
