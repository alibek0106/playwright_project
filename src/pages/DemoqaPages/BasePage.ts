import { Page } from "@playwright/test";

export class BasePage {
    constructor(protected page: Page) { }

    async open(path: string): Promise<void> {
        await this.page.goto(path);
    }

    async click(locator: string): Promise<void> {
        await this.page.locator(locator).click();
    }

    async getTitle() {
        return await this.page.title();
    }
}