import { StudentData } from "../../models/FormData";
import { BasePage } from "./BasePage";
import { expect, Locator, Page } from "@playwright/test";

export class FormsPage extends BasePage {
    readonly formsButton: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly studentEmailInput: Locator;
    readonly mobileInput: Locator;
    readonly subjectInput: Locator;
    readonly addressInput: Locator;
    readonly uploadBtn: Locator;
    readonly submitBtn: Locator;
    readonly modal: Locator;
    readonly table: Locator;

    readonly errorBorderColor = 'rgb(220, 53, 69)';
    readonly successBorderColor = 'rgb(40, 167, 69)';

    constructor(page: Page) {
        super(page);
        this.formsButton = page.getByText('Practice Form').describe('Forms Button');
        this.firstNameInput = page.getByPlaceholder('First Name').describe('First Name Input');
        this.lastNameInput = page.getByPlaceholder('Last Name').describe('Last Name Input');
        this.studentEmailInput = page.getByPlaceholder('name@example.com').describe('Student Email Input');
        this.mobileInput = page.getByPlaceholder('Mobile Number').describe('Mobile Input');
        this.subjectInput = page.locator('#subjectsInput').describe('Subject Input');
        this.addressInput = page.getByPlaceholder('Current Address').describe('Address Input');
        this.uploadBtn = page.getByLabel('Select picture').describe('Upload Button');
        this.submitBtn = page.getByRole('button', { name: 'Submit ' }).describe('Submit Button');
        this.modal = page.locator('.modal-content').describe('Modal');
        this.table = page.locator('.table-responsive').describe('Table');
    }

    async clickFormsBtn(): Promise<void> {
        await this.formsButton.click();
    }

    async fillForm(data: StudentData) {
        await this.firstNameInput.fill(data.firstName);
        await this.lastNameInput.fill(data.lastName);
        await this.studentEmailInput.fill(data.studentEmail);
        // Gender selector (Dynamic Text Locator)
        await this.page.getByText(data.gender, { exact: true }).click();
        await this.mobileInput.fill(data.mobile);
        // Subjects input(Enter to autocomplete)
        for (const subject of data.subjects) {
            await this.subjectInput.fill(subject);
            await this.page.locator('.subjects-auto-complete__menu').waitFor();
            await this.page.keyboard.press('Enter');
        }

        // Hobbies (Multiple checkboxes)
        for (const hobby of data.hobbies) {
            await this.page.getByText(hobby, { exact: true }).click();
        }

        // Image upload (optional)
        if (data.imagePath) {
            await this.uploadBtn.setInputFiles(data.imagePath);
        }

        await this.addressInput.fill(data.address);

        //State and city dropdowns
        await this.page.locator('#state').click();
        await this.page.getByText(data.state, { exact: true }).click();

        await this.page.locator('#city').click();
        await this.page.getByText(data.city, { exact: true }).click();
    }

    async submit(): Promise<void> {
        //sometimes the footer blocks the click, so we force it
        await this.submitBtn.click({ force: true });
    }

    getResult(label: string) {
        return this.table.locator('tr', { hasText: label }).locator('td').nth(1);
    }

    async verifyPageLoaded(): Promise<void> {
        await expect(this.page, 'Page should be loaded').toHaveURL(/.*automation-practice-form/);
        await expect(this.page.getByText('Student Registration Form'), 'The main header should be visible').toBeVisible();
    }
}