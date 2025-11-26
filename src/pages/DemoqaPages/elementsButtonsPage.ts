import { ElementsPage } from "./ElementsPage";

export class ElementsButtonsPage extends ElementsPage {
    doubleClickButton = 'Double Click Me';
    doubleclickMessage = 'You have done a double click';
    rightClickButton = 'Right Click Me';
    rightClickMessage = 'You have done a right click';
    clickButton = 'Click Me';
    dynamicClickMessage = 'You have done a dynamic click';

    async doubleClickBtn() {
        await this.page.getByText(this.doubleClickButton).dblclick();
    }

    async getDoubleClickMessage() {
        return this.page.getByText(this.doubleclickMessage).innerText();
    }

    async rightClickBtn() {
        await this.page.getByText(this.rightClickButton).click({ button: 'right' });
    }

    async getRightClickMessage() {
        return this.page.getByText(this.rightClickMessage).innerText();
    }

    async clickBtn() {
        await this.page.getByText(this.clickButton).click();
    }

    async getDynamicClickMessage() {
        return this.page.getByText(this.clickButton).innerText();
    }
}
