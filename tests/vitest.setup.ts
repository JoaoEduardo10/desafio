import supertest from 'supertest';
import 'vitest';
import { app } from '../src/app';
import 'dotenv/config';

const serverTest = supertest(app);

export { serverTest };
