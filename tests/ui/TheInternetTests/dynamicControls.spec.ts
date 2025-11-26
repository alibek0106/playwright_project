import { test } from '../../../fixtures/testFixtures';

test('Dynamic Controls: remove checkbox and enable input', async ({ dynamicControlsPage }) => {
    await dynamicControlsPage.removeCheckbox();
    await dynamicControlsPage.enableInput();
});