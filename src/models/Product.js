const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;

const Product = new Schema(
    {
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
    }
);
//Plugins
mongoose.plugin(slug);
mongoose.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: "all",
});

module.exports = mongoose.model("Product", Product);
