import express from 'express';
import { config } from 'dotenv';

const app = express();
config();

app.get('/', (req, res) => {
  res.send('ok');
});

export { app };
