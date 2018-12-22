import { LitElement, html } from '@polymer/lit-element';
import { TemplateResult } from 'lit-html';

import { capitalize } from '../../utils/strings';
import { getAllSiblings } from '../../utils/dom';
import { getActiveModes } from '../../utils/app';


class UniversalityMetering extends LitElement {
    private toggled: boolean;
    private selectors: TemplateResult;
    private mode: string;
    private modeLetter: string;
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
        this.modeLetter = '';
        this.selectors = html``;
        this.siblings = getAllSiblings(this);
        this.activeModes = getActiveModes(this.siblings);
    }

    createRenderRoot() {
        return this;
    }

    setMode(mode: string) {
        this.mode = mode;
        this.modeLetter = this.mode[0];

        if (mode === 'paragraph') {
            this.siblings.map(sib => {
                if (sib.nodeName === 'P') {
                    sib.innerHTML = '<universality-metering-p>'
                                    + sib.innerHTML
                                    + '</universality-metering-p>';
                }
            });
        }
        // console.log(this.siblings);

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
            this.mode = '';
            this.modeLetter = '';
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
                    UM${this.modeLetter}
                </div>
                ${ this.selectors }
            </div>
        `;
    }
}


customElements.define('universality-metering', UniversalityMetering);
