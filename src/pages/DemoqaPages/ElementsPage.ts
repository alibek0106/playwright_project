import { BasePage } from "./BasePage";
import { Locator, Page } from "@playwright/test";

export class ElementsPage extends BasePage {
    readonly buttons: Locator;

    constructor(page: Page) {
        super(page);
        this.buttons = page.getByText('Buttons');
    }

    async clickButtonsBtn(): Promise<void> {
        await this.buttons.click();
    }
};