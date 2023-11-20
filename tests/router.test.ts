import { describe, expect, it } from 'vitest';
import { serverTest } from './vitest.setup';

describe('router.ts', () => {
  it('sThis should rectify an error by sending an integer', async () => {
    const { body, statusCode } = await serverTest
      .post(`${process.env.VERSION}/mutiples`)
      .send({
        number: 10,
      });

    expect(statusCode).toBe(200);
    expect(body).toEqual({ total: 23 });
  });
});
