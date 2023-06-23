import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import createConnection from './dbConnection.js';
import { Posting } from './Routes/Posting.js';
dotenv.config();

const app = express();
const PORT = process.env.port


//Middleware:

//bodyParser:
app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))
app.use(cors());
app.use('/post',Posting)


//Database Connection Handler
createConnection();




//listen on port :
app.listen(PORT, ()=>{
    console.log(`Your Node server is listening on ${PORT}🐍`);
})