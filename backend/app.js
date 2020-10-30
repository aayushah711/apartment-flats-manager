const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const authRoute = require('./routes/authRoute');
const flatsRoute = require('./routes/flatsRoute');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
    'mongodb://localhost/apartmentFlatsManager',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('The database is connected');
        }
    }
);

app.use('/api/managers', authRoute);
app.use('/api/flats', flatsRoute);
// app.use('/api/tenants', tenantsRoute);

const port = 5000;
app.listen(port, () => console.log(`The server is up and running on port ${5000}`));
