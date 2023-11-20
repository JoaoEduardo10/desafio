import 'express-async-errors';
import express from 'express';
import { config } from 'dotenv';
import { router } from './router';
import { globalsErrorMiddleware } from './middleware/globals-errors';
import path from 'path';
import swagger from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

const app = express();
config();
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

app.use('/v1/desafio/documentation', swagger.serve, swagger.setup(swaggerDocs));

app.use(`${process.env.VERSION}`, router);

app.use(globalsErrorMiddleware);

export { app };
