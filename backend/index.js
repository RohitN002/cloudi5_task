const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const faqRoutes = require('./routes/faqRoutes');
const formRoutes = require('./routes/formRoutes');
const connectToMongo=require('./db/dbconnection')
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/faqs', faqRoutes);
app.use('/api/forms', formRoutes);

// MongoDB Connection
connectToMongo()


app.listen(port, () => console.log(`Server running on port ${port}`));
