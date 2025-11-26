import { Page } from "@playwright/test";

export class BasePage {
    constructor(protected page: Page) { }

    async open(path: string) {
        await this.page.goto(`https://demoqa.com/${path}`);
    }

    async click(locator: string) {
        await this.page.locator(locator).click();
    }

    async type(locator: string, text: string) {
        await this.page.locator(locator).fill(text);
    }

    async waitFor(locator: string, state: 'visible' | 'hidden') {
        await this.page.locator(locator).waitFor({ state });
    }
}