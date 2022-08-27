import express from 'express';
import dotenv from 'dotenv';
// extension is important here 
import cors from 'cors';
import Connection from './database/db.js';
import Router from './routes/route.js'
import bodyParser from 'body-parser';


dotenv.config();

// body-parser: get m jarurat nhi hai but jisme body ati hai usme jarurat hai express ke nye versions POST ko handle karna nhi jante hai

const app = express();

app.use( cors() );
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
// if we don't have static route we can use '/'.
app.use('/', Router);

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running successfully on port ${PORT}`));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);