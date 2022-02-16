const express = require('express');
var cors = require('cors');
const { json } = require('express/lib/response');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const userUrl = '/api/usuarios'

//middlewares
app.use( cors() );

app.use( express.json() )

//routes
app.use( userUrl , require('./routes/usuario'));


app.listen(port, () => {
    console.log('Server on port', port);
});