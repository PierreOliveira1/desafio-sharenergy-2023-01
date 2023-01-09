import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './routes';
import { corsConfig } from '@config/corsConfig';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsConfig));
app.use('/', Routes);

export default app;
