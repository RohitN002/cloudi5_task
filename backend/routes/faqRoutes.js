const express = require('express');
const router = express.Router();
const faqController = require('../controllers/faqController'); 

// Route to get all FAQs
router.get('/', faqController.getFaqs);

// Route to create a new FAQ
router.post('/', faqController.createFaq);

// Route to edit a FAQ by ID
router.put('/:id', faqController.editFaq);

// Route to delete a FAQ by ID
router.delete('/:id', faqController.deleteFaq);

module.exports = router;
