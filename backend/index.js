const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const faqRoutes = require('./routes/faqRoutes');
const formRoutes = require('./routes/formRoutes');
const app = express();
const port = process.env.PORT || 3000;
const mongo=process.env.MONGODB
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/faqs', faqRoutes);
app.use('/api/forms', formRoutes);

// MongoDB Connection
mongoose.connect(mongo)
.then(() => console.log('MongoDB Connected sucesfully'))
.catch(err => console.log(err));


app.listen(port, () => console.log(`Server running on port ${port}`));
