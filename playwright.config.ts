import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  timeout: 5*60*1000,
  expect:{
    timeout:2*60*1000,
  },
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
  ['html',{open:'never'}],
  ['junit',{outputFile:'./playwright-report/results.xml'}]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    navigationTimeout:2*60*1000,
    trace: 'on',
    headless: false, // 
    ignoreHTTPSErrors:true,
  },
  

  /* Configure projects for major browsers */
  
  projects: [
    {
      name: 'chromium',
      use: { 
        viewport: null,
        channel: 'chrome',
        launchOptions: {
          args:["--start-maximized"]
        }
      },
    },

    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /*Test against mobile viewports.*/
    /*{
      name: 'Mobile Chrome',
      use: {...devices['iPhone 12 Pro Max']},
    }*/


    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
