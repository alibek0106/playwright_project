import { test as base } from '@playwright/test';
import { LoginPage } from '../src/pages/loginPage';
import { DynamicControlsPage } from '../src/pages/DynamicControlsPage';
import { SortableTablesPage } from '../src/pages/SortableTablesPage';

type MyFixtures = {
    loginPage: LoginPage;
    dynamicControlsPage: DynamicControlsPage;
    sortableTablesPage: SortableTablesPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        await use(loginPage);
    },
    dynamicControlsPage: async ({ page }, use) => {
        const dynamicControlsPage = new DynamicControlsPage(page);
        await dynamicControlsPage.goTo();
        await use(dynamicControlsPage);
    },
    sortableTablesPage: async ({ page }, use) => {
        const sortableTablesPage = new SortableTablesPage(page);
        await sortableTablesPage.goTo();
        await use(sortableTablesPage);
    }
});

export { expect } from '@playwright/test';

