import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4321/',
    viewportWidth: 412,
    viewportHeight: 915,
    setupNodeEvents(on) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name !== 'electron') {
          launchOptions.args.push('--window-size=1400,1200');
        }

        return launchOptions;
      });
    },
  },
});
