
import  { chromium, firefox } from 'playwright';


export const connectToBrowser = async (capability) => {
    console.log('Initializing test:: ', capability['LT:Options']['name']);
   // const browserType = capability.browserName.toLowerCase().includes('firefox') ? firefox : chromium;

    const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capability))}`
  });
    // const browser = await chromium.connect({
    //     wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capability))}`,
    //     timeout: 100000 // Increase timeout to 30 seconds

    // });
    return browser;
  };


  