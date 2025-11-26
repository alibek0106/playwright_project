import { BasePage } from "./BasePage";

export class ElementsPage extends BasePage {
    buttons = 'Buttons';

    async clickButtonsBtn(): Promise<void> {
        await this.page.getByText(this.buttons).click();
    }
};