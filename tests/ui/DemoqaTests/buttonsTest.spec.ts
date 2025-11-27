import { test, expect } from '../../../fixtures/demoqaFixtures';

const doubleClickMessage = 'You have done a double click';
const rightClickMessage = 'You have done a right click';
const dynamicClickMessage = 'You have done a dynamic click';

test.describe('DemoQA Buttons Test', () => {
    test('Double click button', async ({ buttonsPage }) => {
        await buttonsPage.doubleClickBtn();
        await expect(buttonsPage.doubleclickMessage).toContainText(doubleClickMessage);
    });

    test('Right click button test', async ({ buttonsPage }) => {
        await buttonsPage.rightClickBtn();
        await expect(buttonsPage.rightClickMessage).toContainText(rightClickMessage);
    });

    test('Dynamic click button test', async ({ buttonsPage }) => {
        await buttonsPage.clickBtn();
        await expect(buttonsPage.dynamicClickMessage).toContainText(dynamicClickMessage);
    });
});