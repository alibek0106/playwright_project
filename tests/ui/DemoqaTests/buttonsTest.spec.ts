import { test, expect } from '../../../fixtures/demoqaFixtures';

const doubleClickMessage = 'You have done a double click';
const rightClickMessage = 'You have done a right click';
const dynamicClickMessage = 'You have done a dynamic click';

test.describe('DemoQA Buttons Test', () => {
    test.beforeEach(async ({ elementsPage }) => {
        await elementsPage.clickButtonsBtn();
    });
    test('Double click button', async ({ buttonsPage }) => {
        await buttonsPage.doubleClickBtn();
        const msg = await buttonsPage.getDoubleClickMessage();
        expect(msg).toBe(doubleClickMessage);
    });

    test('Right click button test', async ({ buttonsPage }) => {
        await buttonsPage.rightClickBtn();
        const msg = await buttonsPage.getRightClickMessage();
        expect(msg).toBe(rightClickMessage);
    });

    test('Dynamic click button test', async ({ buttonsPage }) => {
        await buttonsPage.clickBtn();
        const msg = await buttonsPage.getDynamicClickMessage();
        expect(msg).toBe(dynamicClickMessage);
    });
});