import { chromium, test, expect } from "@playwright/test"

import { connectToBrowser } from '../config/utils/setup.js';
import { teardown } from '../config/utils/teardown.js';
import {capabilities} from '../config/capabilities.js';
let page;

test('has title', async ({page}) => {
 
      await page.goto('https://www.lambdatest.com/selenium-playground');
  
    await page.locator('text=Simple Form Demo').click();
await expect(page).toHaveURL(/simple-form-demo/);
const message = 'Welcome to LambdaTest';
await page.getByPlaceholder('Please enter your Message').fill(message);
await page.getByRole('button', { name: 'Get Checked Value' }).click();
await expect(page.locator('#message')).toHaveText(message);

})

test('drag and drop slider', async ({page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground');
    await page.locator('text=Drag & Drop Sliders').click();
    const slider = page.locator('//div[@id="slider3"]//input');
    const rangeValue = page.locator('#rangeSuccess');
  //  await slider.dragTo({ x: 95, y: 0 }); 
  while(await rangeValue.textContent() !== '95') {await slider.press('ArrowRight')};
    await expect(rangeValue).toHaveText('95');
  })

test('input form submit', async ({page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground');
    await page.locator('text=Input Form Submit').click();
    await page.waitForTimeout(2000);
    await page.waitForLoadState();
    // Step 3: Click Submit without filling in any information 
    await page.locator("button:has-Text('Submit')").click();
  
const validationMsg = await page.locator('input[name="name"]').evaluate(function(el) {
    if (el instanceof HTMLInputElement) {
      return el.validationMessage;
    } else {
      return '';
    }
  });
  //3. Assert “Please fill in the fields” error message.
 
expect(validationMsg).toBe('Please fill out this field.');
//  4. Fill in Name, Email, and other fields. Step 6: Fill in the form
await page.locator('#name').fill('Anglica Dran');
await page.getByPlaceholder("Email").last().fill('angelica.dran@gmail.com');
await page.getByPlaceholder("Password").fill('1234567890');
await page.getByRole('textbox', { name: 'company' }).fill('lamdatest');
await page.locator( '#websitename').fill('https://www.lambdatest.com');
//5. From the Country drop-down, select “United States” using the text

await page.selectOption('select[name="country"]',{label: 'United States'});
await page.getByPlaceholder('City').fill('San Jose');

await page.getByPlaceholder('Address 1').fill('333');
await page.getByPlaceholder('Address 2').fill('Red St');
await page.getByPlaceholder('State').fill('San Jose');
await page.getByPlaceholder('Zip Code').fill('1000123');
await page.locator('//button[text()="Submit"]').click();
await page.waitForTimeout(2000);
// Step 7: Validate success message
const successMsg = await page.locator('.success-msg').textContent();
expect(successMsg).toContain('Thanks for contacting us, we will get back to you shortly.');
})