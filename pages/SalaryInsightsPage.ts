import { expect, Page } from '@playwright/test';

export class SalaryInsightsPage {
  constructor(private page: Page) {}

  async selectRole(role: string) {
    //await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(3000);
    const roleInput = this.page.locator('input[placeholder="Select a role"]');
    await roleInput.click();
     await roleInput.fill(role);
    await roleInput.press('ArrowDown');
    const roleOption = this.page.locator(`ul[role="listbox"] li:has-text("${role}")`);
    await roleOption.waitFor({ state: 'visible' });
    await roleOption.click();
  

  }



  async selectCountry(country: string) {
    const countryInput = this.page.locator('input[placeholder="Select a country"]');
    await countryInput.click();
    await countryInput.fill(country);
    const countryLocator = this.page.locator(`ul[role="listbox"] p:has-text("${country}")`);
    await countryLocator.waitFor({ state: 'visible' });
    await countryLocator.click();
  }
   async SearchFN() {
   const SearchBTN = this.page.locator(`xpath=//button[contains(text(), 'Search')]`);
    await SearchBTN.click();
   
  }
}
