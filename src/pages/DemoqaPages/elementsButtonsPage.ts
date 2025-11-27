import { ElementsPage } from "./ElementsPage";
import { Locator, Page } from "@playwright/test";

export class ElementsButtonsPage extends ElementsPage {
    readonly doubleClickButton: Locator;
    readonly doubleclickMessage: Locator;
    readonly rightClickButton: Locator;
    readonly rightClickMessage: Locator;
    readonly clickButton: Locator;
    readonly dynamicClickMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.doubleClickButton = page.getByRole('button', { name: 'Double Click Me' });
        this.doubleclickMessage = page.locator('#doubleClickMessage');
        this.rightClickButton = page.getByRole('button', { name: 'Right Click Me' });
        this.rightClickMessage = page.locator('#rightClickMessage');
        this.clickButton = page.getByRole('button', { name: 'Click Me', exact: true });
        this.dynamicClickMessage = page.locator('#dynamicClickMessage');
    }

    async doubleClickBtn(): Promise<void> {
        await this.doubleClickButton.dblclick();
    }

    async rightClickBtn(): Promise<void> {
        await this.rightClickButton.click({ button: 'right' });
    }

    async clickBtn(): Promise<void> {
        await this.clickButton.click();
    }
}
