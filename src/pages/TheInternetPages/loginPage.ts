import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginBtn: Locator;
    readonly logoutBtn: Locator;
    readonly flashAlert: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.getByLabel('Username');
        this.passwordInput = page.getByLabel('Password');
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.logoutBtn = page.getByRole('link', { name: 'Logout' });
        this.flashAlert = page.locator('#flash');
    }


    async goTo() {
        await this.open('/login');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }

    async logout() {
        await this.logoutBtn.click();
    }
}