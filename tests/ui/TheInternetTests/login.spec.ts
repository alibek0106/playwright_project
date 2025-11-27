import { test, expect } from '../../../fixtures/testFixtures';

test.describe('Login tests', () => {
    test('Successful login', async ({ page, loginPage }) => {
        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(page).toHaveURL(/\/secure/);
        await expect(loginPage.flashAlert).toContainText('You logged into a secure area!');
    });

    test('Login with wrong password', async ({ loginPage }) => {
        await loginPage.login('tomsmith', 'wrongpass');
        await expect(loginPage.flashAlert).toContainText('Your password is invlid!');
    });

    test('Login with empty username', async ({ loginPage }) => {
        await loginPage.login('', 'SuperSecretPassword!');
        await expect(loginPage.flashAlert).toContainText('Your username is invalid!');
    });

    test('Login with empty password', async ({ loginPage }) => {
        await loginPage.login('tomsmith', '');
        await expect(loginPage.flashAlert).toContainText('Your password is invalid!');
    });

    test('Logout test', async ({ page, loginPage }) => {
        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(loginPage.logoutBtn).toBeVisible();
        await loginPage.logout();
        await expect(page).toHaveURL(/login/);
    });
});