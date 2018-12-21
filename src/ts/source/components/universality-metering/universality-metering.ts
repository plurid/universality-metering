import { LitElement, html } from '@polymer/lit-element';



class UniversalityMetering extends LitElement {
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
            <div class="universality-metering-selector">
                UM
            </div>
        `;
    }
}


customElements.define('universality-metering', UniversalityMetering);
