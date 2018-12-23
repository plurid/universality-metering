import { LitElement, html } from '@polymer/lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';



class UniversalityMeteringP extends LitElement {
    static get properties() {
        return {
        };
    }

    constructor() {
        super();
    }

    createRenderRoot() {
        return this;
    }

    firstUpdated() {
    }

    render() {
        return html`
            ${ unsafeHTML(this.innerHTML) }

            <universality-metering-grading mode="paragraph">
            </universality-metering-grading>
        `;
    }
}


customElements.define('universality-metering-p', UniversalityMeteringP);


const checkLeftGrading = (element: any): boolean => {
    // console.log(element);

    if (element.classList.contains('universality-metering-grading')) {
        return false
    }

    while (element.parentElement) {
        return checkLeftGrading(element.parentElement);
    }

    return true
}