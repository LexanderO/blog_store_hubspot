const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', authRoutes);
app.use('/blogs', blogRoutes);

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

mongoose.connect(MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`MongoDB connected and Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.log(err));