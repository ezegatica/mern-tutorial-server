const express = require('express');
const app = express();
const cors = require('cors')



// settings
app.set('port', 4000);


// middlewares
app.use(cors())
app.use(express.json())


// routes
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))

module.exports = app;