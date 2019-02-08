const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./books_controller');


const app = express();

app.use(bodyParser.json());



//Endpoints

//Get
app.get('/api/books', ctrl.getBooks);


//Post - Create
app.post('/api/book', ctrl.createBook);


//Delete
app.delete('/api/book/:id', ctrl.deleteBook)


//Put
app.put('/api/book/:id', ctrl.updateBook)


const PORT = 4000;
app.listen(PORT, () => console.log('Houston we have lift off on port 4000'))