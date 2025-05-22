const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const logger = require('./middlewares/logger');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(logger);
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/', require('./routes/sampleRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
