if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const authRoutes = require('./routes/auth-routes');

const PORT = process.env.PORT;

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

app.use('/auth', authRoutes);