import { Page, Locator } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) { }

    get usernameInput(): Locator {
        return this.page.locator('//input[@id="username"]');
    }

    get passwordInput(): Locator {
        return this.page.locator('//input[@id="password"]');
    }

    get loginButton(): Locator {
        return this.page.locator('//button[@type="submit"]');
    }

    get flashMessage(): Locator {
        return this.page.locator('//*[@id="flash"]');
    }

    get logoutButton(): Locator {
        return this.page.locator('//*[text()=" Logout"]');
    }

    async goTo() {
        await this.page.goto('/login');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getFlashMessage() {
        return await this.flashMessage.textContent();
    }

    async logout() {
        await this.logoutButton.click();
    }
}