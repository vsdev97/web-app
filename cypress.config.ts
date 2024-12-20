import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl:  'http://localhost:3000/web-app/',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
