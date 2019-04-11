import { Component } from '@stencil/core';



@Component({
    tag: 'universality-metering-s',
    styleUrl: 'universality-metering-s.scss',
    shadow: true
})
export class UniversalityMeteringS {
    render() {
        return (
            <universality-metering-grading mode="sentence">
            </universality-metering-grading>
        );
    }
}
