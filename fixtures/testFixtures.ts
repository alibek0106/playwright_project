import { test as base } from '@playwright/test';
import { LoginPage } from '../src/pages/loginPage';
import { DynamicControlsPage } from '../src/pages/DynamicControlsPage';

type MyFixtures = {
    loginPage: LoginPage;
    dynamicControlsPage: DynamicControlsPage;
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
});

export { expect } from '@playwright/test';

