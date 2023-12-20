import { test, expect } from "@playwright/test";
import GooglePage from "../pages/googlePage/GooglePage";

test("Google Search Test", async ({ page }) => {
  const googlePage = new GooglePage(page);
  await googlePage.openGooglePage();
  await googlePage.typeSearchQuery("bilal");
  await googlePage.pressEnter();
});
