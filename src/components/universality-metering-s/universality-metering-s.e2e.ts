import { newE2EPage } from '@stencil/core/testing';



describe('universality-metering-s', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<universality-metering-s></universality-metering-s>');
        const element = await page.find('universality-metering-s');
    });
});
