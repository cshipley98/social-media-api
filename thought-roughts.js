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
