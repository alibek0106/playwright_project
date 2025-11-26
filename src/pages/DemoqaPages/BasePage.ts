import { Page } from "@playwright/test";

export class BasePage {
    constructor(protected page: Page) { }

    async open(path: string): Promise<void> {
        await this.page.goto(`https://demoqa.com/${path}`);
    }

    async click(locator: string): Promise<void> {
        await this.page.locator(locator).click();
    }

    async type(locator: string, text: string): Promise<void> {
        await this.page.locator(locator).fill(text);
    }

    async waitFor(locator: string, state: 'visible' | 'hidden'): Promise<void> {
        await this.page.locator(locator).waitFor({ state });
    }
}