import { Page } from "playwright";
import { locators } from "./GooglePageLocators";

class GooglePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openGooglePage() {
    await this.page.goto("https://www.google.com");
  }

  async typeSearchQuery(query: string) {
    await this.page.fill(locators.searchBar, query);
  }

  async pressEnter() {
    await this.page.keyboard.press("Enter");
    await this.page.waitForLoadState();
  }
}

export default GooglePage;
