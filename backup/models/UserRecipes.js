const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserRecipeSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: Image,
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

module.exports = mongoose.model('userrecipes', UserRecipeSchema);