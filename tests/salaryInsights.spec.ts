import { test, expect } from '@playwright/test';
import { SalaryInsightsPage } from '../pages/SalaryInsightsPage';
import testData from '../data/testData.json' assert { type: 'json' };

test.describe('Salary Insights Tests', () => {
  for (const data of testData) {
    test(`Check salary insight for ${data.role} in ${data.country}`, async ({ page }) => {
      await page.goto('https://growth.deel.training/dev/salary-insights');
      const insightsPage = new SalaryInsightsPage(page);

      await insightsPage.selectRole(data.role);
      await insightsPage.selectCountry(data.country);
      await insightsPage.SearchFN();
await expect(page.getByText('Check salary insights anywhere in the world')).toBeVisible();
     
    });
  }
//    test.afterEach(async ({ page }) => {
//    await page.close();
//  })
});