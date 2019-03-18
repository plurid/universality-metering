import { Component } from '@stencil/core';



@Component({
    tag: 'universality-metering-p',
    styleUrl: 'universality-metering-p.scss',
    shadow: true
})
export class UniversalityMeteringP {
    render() {
        return (
            <universality-metering-grading mode="paragraph">
            </universality-metering-grading>
        );
    }
}
