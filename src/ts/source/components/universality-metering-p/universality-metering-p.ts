import { LitElement, html } from '@polymer/lit-element';



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

    render() {
        return html`
            ${this.innerHTML}

            <universality-metering-grading mode="paragraph">
            </universality-metering-grading>
        `;
    }
}


customElements.define('universality-metering-p', UniversalityMeteringP);
