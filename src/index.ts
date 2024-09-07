import dotenv from 'dotenv';
dotenv.config();
import './config/db';
import app from './app';

const PORT = 8000;


app.listen(PORT, function(){
    console.log(`Server running:- http//localhost:${PORT}`)
});