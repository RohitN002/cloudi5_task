const Form = require('../models/Form'); 

// Create form submission 
exports.submitForm = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newForm = new Form({ name, email, message });
        await newForm.save();
        res.status(201).json(newForm);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get all forms
exports.getForms = async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json(forms);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get a single form by ID
exports.getFormById = async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (!form) {
            return res.status(404).json({ error: 'Form not found' });
        }
        res.status(200).json(form);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update form by ID (edit)
exports.updateFormById = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const updatedForm = await Form.findByIdAndUpdate(
            req.params.id,
            { name, email, message },
            { new: true, runValidators: true }
        );

        if (!updatedForm) {
            return res.status(404).json({ error: 'Form not found' });
        }

        res.status(200).json(updatedForm);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete form by ID
exports.deleteFormById = async (req, res) => {
    try {
        const deletedForm = await Form.findByIdAndDelete(req.params.id);
        if (!deletedForm) {
            return res.status(404).json({ error: 'Form not found' });
        }
        res.status(200).json({ message: 'Form deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
