import { BasePage } from "./BasePage";
import { expect } from "@playwright/test";

export class DynamicControlsPage extends BasePage {
    checkbox = '//*[@id="checkbox"]';
    checkboxButton = '//button[@onclick="swapCheckbox()"]';
    inputField = '//*[@id="input-example"]/input';
    enableButton = '//*[@id="input-example"]/button';
    message = '//p[@id="message"]';

    async removeCheckbox() {
        await this.click(this.checkboxButton);
        await this.waitFor(this.checkbox, 'hidden');
        await expect(this.page.locator(this.message)).toHaveText('It\'s gone!');
    }

    async enableInput() {
        await this.click(this.enableButton);
        await this.waitFor(this.inputField, 'visible');
        await expect(this.page.locator(this.message)).toHaveText('It\'s enabled!');
    }

    async goTo() {
        await this.open('/dynamic_controls');
    }
}