import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Served from https://neurotech-hub.github.io/AcousticRisk/
export default defineConfig({
  base: '/AcousticRisk/',
  plugins: [react()],
  test: { environment: 'node', include: ['src/**/*.test.ts'] },
});
