const express = require('express');
const mongoose = require('mongoose');
const routes = require('../src/routes/dev_routes')

const app = express();

mongoose.connect('mongodb+srv://wallef:wfa4@cluster0-zlp5x.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3000);

