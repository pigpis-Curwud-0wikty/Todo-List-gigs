const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const routerTodo = require('./routes/todos');
require('dotenv').config();

const app = express();
app.use(cors({
    origin: ['http://localhost:4200', 'http://localhost:5000'],
    credentials: true
}));
app.use(express.json());

connectDB();

app.use('/api/todos', routerTodo);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
    console.log(`http://localhost:${process.env.PORT || 5000}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});
