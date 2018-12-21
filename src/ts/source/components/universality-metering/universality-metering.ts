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

    toggle() {
        console.log('toggle')
    }

    render() {
        return html`
            <div class="universality-metering-selectors">
                <div class="universality-metering-selector universality-metering-selector-um" @click=${ (e: Event) => this.toggle() }>UM</div>
                <div class="universality-metering-selector">Text</div>
                <div class="universality-metering-selector">Paragraph</div>
                <div class="universality-metering-selector">Sentence</div>
                <div class="universality-metering-selector">Word</div>
            </div>
        `;
    }
}


customElements.define('universality-metering', UniversalityMetering);
