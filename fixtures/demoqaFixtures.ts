import { test as base } from '@playwright/test';
import { ElementsPage } from '../src/pages/DemoqaPages/ElementsPage';
import { ElementsButtonsPage } from '../src/pages/DemoqaPages/elementsButtonsPage';

type MyFixtures = {
    elementsPage: ElementsPage;
    buttonsPage: ElementsButtonsPage;
};

export const test = base.extend<MyFixtures>({
    elementsPage: async ({ page }, use) => {
        const elementsPage = new ElementsPage(page);
        await elementsPage.open('elements');
        await use(elementsPage);
    },
    buttonsPage: async ({ page, elementsPage }, use) => {
        const buttonsPage = new ElementsButtonsPage(page);
        await elementsPage.clickButtonsBtn();
        await use(buttonsPage);
    },
});

export { expect } from '@playwright/test';