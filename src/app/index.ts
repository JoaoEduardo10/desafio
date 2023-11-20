import 'express-async-errors';
import express from 'express';
import { config } from 'dotenv';
import { router } from './router';
import { globalsErrorMiddleware } from './middleware/globals-errors';
import path from 'path';

const app = express();
config();
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

app.use(`${process.env.VERSION}`, router);

app.use(globalsErrorMiddleware);

export { app };
