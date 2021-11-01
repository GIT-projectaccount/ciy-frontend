const mongoose = require('mongoose')
const { Schema } = mongoose;

const RecipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    steps: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: "General"
    },
    subcategory: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('recipes', RecipeSchema);