import 'express-async-errors';
import express from 'express';
import { config } from 'dotenv';
import { router } from './router';
import { globalsErrorMiddleware } from './middleware/globals-errors';

const app = express();
config();
app.use(express.json());

app.use(`${process.env.VERSION}`, router);

app.use(globalsErrorMiddleware);

export { app };
