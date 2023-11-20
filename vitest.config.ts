import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    bail: 1,
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      exclude: ['src/app/errors', 'src/app/middleware/g*.ts'],
    },
    setupFiles: ['tests/vitest.setup.ts'],
  },
});
