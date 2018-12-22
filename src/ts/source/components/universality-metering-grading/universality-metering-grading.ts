import { LitElement, html } from '@polymer/lit-element';

import { capitalize } from '../../utils/strings';



class UniversalityMeteringGrading extends LitElement {
    private _mode: string;

    static get properties() {
        return {
        };
    }

    constructor() {
        super();
        this.mode = this.getAttribute('mode');
    }

    createRenderRoot() {
        return this;
    }

    get mode(): string {
        return this._mode;
    }
    set mode(newMode: string) {
        this._mode = newMode;
    }

    render() {
        return html`
            <div class="universality-metering-grading">
                ${capitalize(this.mode)} Universality
            </div>
        `;
    }
}


customElements.define('universality-metering-grading', UniversalityMeteringGrading);
