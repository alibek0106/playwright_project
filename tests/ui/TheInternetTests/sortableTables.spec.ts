import { test, expect } from '../../../fixtures/testFixtures';

const actualDueSum = 251.00;
const expectedEmail = "jdoe@hotmail.com";
const firstName = "John";
const lastName = "Doe";

test.describe('Sortable Tables tests', () => {
    test('Verify total Due sum in Table 1', async ({ sortableTablesPage }) => {
        const dueValues = await sortableTablesPage.getDueAmounts();
        const sum = dueValues.map(v => parseFloat(v!.replace('$', ''))).reduce((a, b) => a + b, 0);
        expect(sum).toBe(actualDueSum);
    });

    test(`Check that user with email ${expectedEmail} is present in Table 1`, async ({ sortableTablesPage }) => {
        const emails = await sortableTablesPage.getEmails();
        expect(emails).toContain(expectedEmail);
    });

    test(` Verify that user ${firstName} ${lastName} exists in Table 1`, async ({ sortableTablesPage }) => {
        const firstNames = await sortableTablesPage.getFirstNames();
        const lastNames = await sortableTablesPage.getLastNames();
        expect(firstNames).toContain(firstName);
        expect(lastNames).toContain(lastName);
    });

    test('All website URLs in Table 1 contain http', async ({ sortableTablesPage }) => {
        const websites = await sortableTablesPage.getWebsites();
        websites.forEach(url => expect(url).toContain('http'));
    });
});