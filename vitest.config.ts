import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    bail: 1,
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
    },
    setupFiles: ['tests/vitest.setup.ts'],
  },
});
