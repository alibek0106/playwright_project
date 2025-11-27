import { test as base } from '@playwright/test';
import { ElementsPage } from '../src/pages/DemoqaPages/ElementsPage';
import { ElementsButtonsPage } from '../src/pages/DemoqaPages/elementsButtonsPage';
import { FormsPage } from '../src/pages/DemoqaPages/FormsPage';

type MyFixtures = {
    elementsPage: ElementsPage;
    buttonsPage: ElementsButtonsPage;
    formsPage: FormsPage;
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
    formsPage: async ({ page }, use) => {
        const formsPage = new FormsPage(page);
        await formsPage.open('forms');
        await formsPage.clickFormsBtn();
        await use(formsPage);
    }
});

export { expect } from '@playwright/test';