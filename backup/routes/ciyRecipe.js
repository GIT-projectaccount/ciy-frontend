const express = require('express');
const router = express.Router();
const CiyRecipe = require('../models/CiyRecipes');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Add a recipe.
router.post('/addrecipe', [
    body('title', "Enter a valid title").isLength({ min: 3 }),
    body('description', "Enter a valid description").isLength({ min: 5 })
], async (req, res) => {
    try {
        // check errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, image, description, ingredients, steps, category, subcategory } = req.body;
        const recipe = new CiyRecipe({
            title, image, description, ingredients, steps, category, subcategory
        })
        const savedRecipe = await recipe.save();
        res.json(savedRecipe);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

// ROUTE 2: Update an existing Recipe.
router.put('/updaterecipe/:id', async (req, res) => {
    try {
        const { title, image, description, ingredients, steps, category, subcategory } = req.body;

        // Create a newnote object
        const newRecipe = {};
        if (title) { newRecipe.title = title };
        if (image) { newRecipe.image = image };
        if (description) { newRecipe.description = description };
        if (ingredients) { newRecipe.ingredients = ingredients };
        if (steps) { newRecipe.steps = steps };
        if (category) { newRecipe.category = category };
        if (subcategory) { newRecipe.subcategory = subcategory };

        // Find the note to be updated and update it
        let recipe = await CiyRecipe.findById(req.params.id);
        if (!recipe) { res.status(404).send("Not found") };

        recipe = await CiyRecipe.findByIdAndUpdate(req.params.id, { $set: newRecipe }, { new: true })
        res.json({ recipe });

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }

});

// ROUTE 3: Get all recipes.
router.get('/fetchallrecipe', async (req, res) => {

    try {
        const allRecipes = await CiyRecipe.find();
        res.json(allRecipes);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

module.exports = router;