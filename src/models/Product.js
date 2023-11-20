const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

const Schema = mongoose.Schema;
mongoose.plugin(slug);
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

module.exports = mongoose.model("Product", Product);
