import { newE2EPage } from '@stencil/core/testing';



describe('universality-metering-grading', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<universality-metering-grading></universality-metering-grading>');
        const element = await page.find('universality-metering-grading');
    });
});
