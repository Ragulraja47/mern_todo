const express = require('express');

const todorouter = require('./routes/todo.js');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/todo',todorouter);

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})