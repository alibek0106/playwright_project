import { test, expect } from '../../../fixtures/demoqaFixtures';
import { DataFactory } from '../../../src/utils/DataFactory';
import fs from 'fs';

test.describe('DemoQA Practice Form Test', () => {
    const dummyImagePath = 'src/testData/upload-test.jpg';

    test.beforeAll(() => {
        // Create a dummy image file
        if (!fs.existsSync(dummyImagePath)) {
            fs.writeFileSync(dummyImagePath, 'dummy content');
        }
    });

    test('Successfull submit form with random data', async ({ formsPage }) => {
        await formsPage.verifyPageLoaded();
        const student = DataFactory.getRandomStudent();
        student.imagePath = dummyImagePath;

        await formsPage.fillForm(student);
        await formsPage.submit();

        await expect(formsPage.modal, 'Modal should be visible').toBeVisible();
        await expect.soft(formsPage.modal, 'Modal should contain text').toContainText('Thanks for submitting the form');
        // Individual assertions for each field
        await expect.soft(formsPage.getResult('Student Name'), 'Student Name should be visible').toContainText(`${student.firstName} ${student.lastName}`);
        await expect.soft(formsPage.getResult('Student Email'), 'Student Email should be visible').toContainText(student.studentEmail);
    });

    test('Validation fails when submitting empty mandatory fields', async ({ formsPage }) => {
        await formsPage.verifyPageLoaded();
        await formsPage.submit();
        await expect(formsPage.modal, 'Modal should not be visible').not.toBeVisible();
        // Assertions for error on mandatory fields
        await expect(formsPage.firstNameInput, 'First Name should have error').toHaveCSS('border-color', formsPage.errorBorderColor);
        await expect(formsPage.lastNameInput, 'Last Name should have error').toHaveCSS('border-color', formsPage.errorBorderColor);
        await expect(formsPage.mobileInput, 'Mobile should have error').toHaveCSS('border-color', formsPage.errorBorderColor);
    });

    test('Validation fails with invalid mobile number', async ({ formsPage }) => {
        await formsPage.verifyPageLoaded();
        const student = DataFactory.getRandomStudent();
        student.mobile = '123'; //Too short, needs 10 digits
        await formsPage.fillForm(student);
        await formsPage.submit();
        await expect(formsPage.modal, 'Modal should not be visible').not.toBeVisible();
        // Assertions for error on invalid mobile number
        await expect(formsPage.mobileInput, 'Mobile should have error').toHaveCSS('border-color', formsPage.errorBorderColor);
    });
});