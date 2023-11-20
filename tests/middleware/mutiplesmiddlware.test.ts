import { describe, expect, it } from 'vitest';
import { serverTest } from '../vitest.setup';

describe('mutiplesmiddlware.ts', () => {
  it('should return an error because it does not add a number', async () => {
    const { body, statusCode } = await serverTest.post(
      `${process.env.VERSION}/mutiples`,
    );

    expect(statusCode).toBe(400);
    expect(body).toEqual({ error: 'Adicione um numero' });
  });

  it('should rectify an error for sending a string', async () => {
    const { body, statusCode } = await serverTest
      .post(`${process.env.VERSION}/mutiples`)
      .send({
        number: '1234',
      });

    expect(statusCode).toBe(400);
    expect(body).toEqual({ error: 'O número deve ser positivo e inteiro.' });
  });

  it('sThis should rectify an error by sending an integer', async () => {
    const { body, statusCode } = await serverTest
      .post(`${process.env.VERSION}/mutiples`)
      .send({
        number: 10.5,
      });

    expect(statusCode).toBe(400);
    expect(body).toEqual({ error: 'O número deve ser positivo e inteiro.' });
  });
});
