import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(logger('dev'));

export default app;
