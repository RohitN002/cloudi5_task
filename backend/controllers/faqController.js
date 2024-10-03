const Faq = require('../models/faq');

// Get all FAQs
exports.getFaqs = async (req, res) => {
    try {
        const faqs = await Faq.find();
        res.status(200).json(faqs);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Create FAQ
exports.createFaq = async (req, res) => {
    const { question, answer } = req.body;

    if (!question || !answer) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newFaq = new Faq({ question, answer });
        await newFaq.save();
        res.status(201).json(newFaq);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

//edit faq
exports.editFaq = async (req, res) => {
    try {
        const faqId = req.params.id;
        const updateData = req.body;

        // Find item by ID and update it
        const updatedItem = await Item.findByIdAndUpdate(itemId, updateData, { new: true });

        if (!updatedItem) {
            return res.status(404).send('Item not found');
        }

        res.status(200).json({message:"data updated sucessfully"});
    } catch (error) {
        res.status(500).send('Error updating item');
    }
}


// Delete FAQ
exports.deleteFaq = async (req, res) => {
    try {
        await Faq.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'FAQ deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
