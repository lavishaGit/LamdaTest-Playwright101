import { defineConfig } from '@playwright/test';

const capabilities = [
  {
    browserName: 'pw-chromium',
    browserVersion: 'latest',
    'LT:Options': {
      platform: 'Windows 10',
      build: 'Multi Capability Test',
      name: 'Chromium on Windows',
      user: 'yadavlavisha2212',
      accessKey: 'LT_jhO3oR31qBdIBTVUz0cE2bqkRaZTHTpFNUwG1mHNSDCgd3w',
      network: true,
        video: true,
        console: true,
        screenshot: 'on',
        trace: 'on',
    }
  },
  {
    browserName: 'pw-firefox',
    browserVersion: 'latest',
    'LT:Options': {
      platform: 'macOS Ventura',
      build: 'Multi Capability Test',
      name: 'Firefox on macOS',
      user: 'yadavlavisha2212',
      accessKey: 'LT_jhO3oR31qBdIBTVUz0cE2bqkRaZTHTpFNUwG1mHNSDCgd3w',
      network: true,
        video: true,
        console: true,
        screenshot: 'on',
        trace: 'on',
    }
  }
];

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
  headless: false,
        screenshot: "on",
        video: "on",
  },
  projects: capabilities.map(capability => ({
    name: capability['LT:Options'].name,
    use: {
      connectOptions: {
        wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capability))}`,
      },
    }
  })),
});













// import { defineConfig} from '@playwright/test';

// import{capabilities} from './config/capabilities.js';


// function mapToPlaywrightBrowserName(browserName) {
//   if (browserName.includes('firefox') || browserName === 'pw-firefox') return 'firefox';
//   if (browserName.includes('chrome') || browserName === 'pw-chromium') return 'chromium';
//   return 'chromium'; // fallback for Chrome, Edge, etc.
// }

// export default defineConfig({
//   timeout: 60 * 1000 * 1,

//   fullyParallel: true,
//   reporter: 'html',
//   workers: 3,

//   projects: capabilities.map(capability => ({
//     name: capability['LT:Options']['name'],
//     use: {
//       browserName: mapToPlaywrightBrowserName(capability.browserName),
//     },
//     metadata: {
//       lt: capability,
//     },
//   }))
// });
