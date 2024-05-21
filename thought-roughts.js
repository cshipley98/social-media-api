const router = require('express').Router();

const {
    createThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaciton
} = require('../../controllers/thought-controller');

// /api/thoughts <GET> 
router.route('/').get(getAllThoughts);


// /api/thoughts/:id <GET, PUT, DELETE> 
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);