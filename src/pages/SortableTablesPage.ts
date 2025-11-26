import { BasePage } from "./BasePage";

export class SortableTablesPage extends BasePage {
    // Locators for Table 1
    // Assuming the standard "The Internet" app structure where Table 1 is #table1
    private table1 = '#table1';

    // Column indices (1-based for nth-child)
    // Last Name | First Name | Email | Due | Web Site | Action
    private lastNameColumnIndex = 1;
    private firstNameColumnIndex = 2;
    private emailColumnIndex = 3;
    private dueColumnIndex = 4;
    private websiteColumnIndex = 5;

    async goTo() {
        await this.open('/tables');
    }

    /**
     * Helper to get all text values from a specific column in Table 1
     */
    private async getColumnValues(columnIndex: number): Promise<string[]> {
        return this.page.locator(`${this.table1} tbody tr td:nth-child(${columnIndex})`).allInnerTexts();
    }

    async getLastNames(): Promise<string[]> {
        return this.getColumnValues(this.lastNameColumnIndex);
    }

    async getFirstNames(): Promise<string[]> {
        return this.getColumnValues(this.firstNameColumnIndex);
    }

    async getEmails(): Promise<string[]> {
        return this.getColumnValues(this.emailColumnIndex);
    }

    async getDueAmounts(): Promise<string[]> {
        return this.getColumnValues(this.dueColumnIndex);
    }

    async getWebsites(): Promise<string[]> {
        return this.getColumnValues(this.websiteColumnIndex);
    }
}