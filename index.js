const express = require('express');
const app = express();
const Joi = require('joi');
const cors = require('cors');
const malumotlar = require('./routes/malumotlar');
const helmet = require('helmet');
const morgan = require('morgan');

app.use(express.json());
app.use(cors());
app.use('/api/malumotlar', malumotlar);
app.use(helmet());
app.use(express.static('client'));
app.set('view engine', 'ejs');

if(app.get('env') === "development") app.use(morgan('tiny'));

const port = process.env.PORT || 2000;
app.listen(port, function(){
    console.log(`${port} - portni eshtishni boshladim...`);
})