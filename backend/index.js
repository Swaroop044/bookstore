import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';

const app = express();

app.use(express.json());

//Middleware for handling CORS POLICY
//Option 1: Allow Alll Origiins with Default of cors(*)
app.use(
    cors({
      origin: ['https://bookstore-mern-tan.vercel.app','http://localhost:5173','https://bookstore-mern-e6vc.vercel.app/'], // or your frontend's deployed URL
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type'],
    })
);


//Option 2: Allow Custom Origins
// app.use(
//     cors({
//     origin: ['http://localhost:3000'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders : ['Content-Type'],
// })
// );
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to MERN Stack Tutorial');
});

app.use('/books', booksRoute);

const router = express.Router();

// In booksRoute.js
router.post('/', async (req, res) => {
    const { title, author, publishYear } = req.body;

    const newBook = new Book({ title, author, publishYear });

    try {
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});



mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });