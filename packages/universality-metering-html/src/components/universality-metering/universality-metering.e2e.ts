import { newE2EPage } from '@stencil/core/testing';



describe('universality-metering', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<universality-metering></universality-metering>');
        const element = await page.find('universality-metering');
    });
});
