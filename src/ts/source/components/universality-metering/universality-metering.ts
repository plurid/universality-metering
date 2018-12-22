import { LitElement, html } from '@polymer/lit-element';
import { TemplateResult } from 'lit-html';

import { capitalize } from '../../utils/strings';
import { getAllSiblings } from '../../utils/dom';
import { getActiveModes } from '../../utils/app';


class UniversalityMetering extends LitElement {
    private toggled: boolean;
    private selectors: TemplateResult;
    private mode: string;
    private siblings: Element[];
    private activeModes: Array<string>;

    static get properties() {
        return {
        };
    }

    constructor() {
        super();
        this.toggled = false;
        this.mode = '';
        this.selectors = html``;
        this.siblings = getAllSiblings(this);
        this.activeModes = getActiveModes(this.siblings);
    }

    createRenderRoot() {
        return this;
    }

    setMode(mode: string) {
        this.mode = mode;
        // console.log(this.mode);
        this.toggle();
    }

    toggle() {
        // const umBtn = this.querySelector('universality-metering-selector-um');
        // console.log(umBtn);

        if (this.toggled === true) {
            this.selectors = html``;
            this.toggled = false;
            // umBtn.classList.remove('universality-metering-selector-um-toggled');
        } else {
            this.selectors = html`
                ${
                    this.activeModes.map((mode) => html`
                        <div
                            class="universality-metering-selector"
                            @click=${ (e: Event) => this.setMode(mode) }
                        >
                            ${capitalize(mode)}
                        </div>
                    `)
                }
            `;
            // umBtn.classList.add('universality-metering-selector-um-toggled');
            this.toggled = true;
        }

        this.requestUpdate();
    }

    render() {
        return html`
            <div class="universality-metering-selectors">
                <div class="universality-metering-selector universality-metering-selector-um"
                    @click=${ (e: Event) => this.toggle() }
                >
                    UM
                </div>
                ${ this.selectors }
            </div>
        `;
    }
}


customElements.define('universality-metering', UniversalityMetering);
