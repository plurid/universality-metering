import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';



export const config: Config = {
    namespace: 'universality-metering-html',
    copy: [
        { src: 'test-assets' },
    ],
    outputTargets:[
        { type: 'dist' },
        { type: 'docs' },
        {
            type: 'www',
            serviceWorker: null
        }
    ],
    plugins: [
        sass(),
        inlineSvg(),
    ],
};
