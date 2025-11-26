import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    usernameInput = '//input[@id="username"]';
    passwordInput = '//input[@id="password"]';
    loginButton = '//button[@type="submit"]';
    flashMessage = '//*[@id="flash"]';
    logoutButton = '//*[text()=" Logout"]';

    async goTo() {
        await this.open('/login');
    }

    async login(username: string, password: string) {
        await this.type(this.usernameInput, username);
        await this.type(this.passwordInput, password);
        await this.click(this.loginButton);
    }

    async getFlashMessage() {
        return await this.page.locator(this.flashMessage).textContent();
    }

    async logout() {
        await this.click(this.logoutButton);
    }
}