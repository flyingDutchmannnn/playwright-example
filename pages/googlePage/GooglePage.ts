import { Page } from "playwright";

class GooglePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openGooglePage() {
    await this.page.goto("https://www.google.com");
    await this.page.waitForLoadState("networkidle");
  }

  async typeSearchQuery(query: string) {
    await this.page.fill('[type="search"]', query);
  }

  async pressEnter() {
    await this.page.keyboard.press("Enter");
  }
}

export default GooglePage;
