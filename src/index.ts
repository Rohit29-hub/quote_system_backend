import dotenv from 'dotenv';
dotenv.config();
import './config/db';
import app from './app';

const PORT = process.env.PORT;


app.listen(PORT, function(){
    console.log(`Server running:- http//localhost:${PORT}`)
});