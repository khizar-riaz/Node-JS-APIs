const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = 5000;

app.use(bodyParser.json());

let todos = [
    {id:1, title: "Todo1"},
    {id:2, title: "Todo2"},
    {id:3, title: "Todo3"}
]

app.get('/todos', (req, res) =>{
    res.json(todos);
})

app.listen(port, () =>{
    console.log('Server running on port ${port}')
})

//http://localhost:5000/todos
//to run server node index.js