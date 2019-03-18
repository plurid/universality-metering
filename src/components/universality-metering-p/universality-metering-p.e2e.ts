import { newE2EPage } from '@stencil/core/testing';



describe('universality-metering-p', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<universality-metering-p></universality-metering-p>');
        const element = await page.find('universality-metering-p');
    });
});
