import { test, expect } from '../../../fixtures/testFixtures';

test.describe('Login tests', () => {
    test('Successful login', async ({ page, loginPage }) => {
        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(page).toHaveURL(/\/secure/);
    });

    test('Login with wrong password', async ({ loginPage }) => {
        await loginPage.login('tomsmith', 'wrongpass');
        const msg = await loginPage.getFlashMessage();
        expect(msg).toContain('Your password is invalid!');
    });

    test('Login with empty username', async ({ loginPage }) => {
        await loginPage.login('', 'SuperSecretPassword!');
        const msg = await loginPage.getFlashMessage();
        expect(msg).toContain('Your username is invalid!');
    });

    test('Login with empty password', async ({ loginPage }) => {
        await loginPage.login('tomsmith', '');
        const msg = await loginPage.getFlashMessage();
        expect(msg).toContain('Your password is invalid!');
    });

    test('Logout test', async ({ page, loginPage }) => {
        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        await loginPage.logout();
        await expect(page).toHaveURL(/login/);
    });
});