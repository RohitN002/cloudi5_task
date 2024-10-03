const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController'); 

// Route to submit a form
router.post('/submit', formController.submitForm);

// Route to get all forms
router.get('/', formController.getForms);

// Route to get a form by ID
router.get('/:id', formController.getFormById);

// Route to update a form by ID
router.put('/:id', formController.updateForm);

// Route to delete a form by ID
router.delete('/:id', formController.deleteForm);

module.exports = router;
