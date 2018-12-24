import { LitElement, html } from '@polymer/lit-element';
import { TemplateResult } from 'lit-html';

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
        this.siblings = getAllSiblings(this);


        if (mode === 'sentence') {
            this.siblings.map(sib => {
                if (sib.nodeName === 'P') {
                    const sentenceRegex = new RegExp('[^\.!\?]+[\.!\?]+', 'g');
                    const sibText = sib.innerHTML;
                    const sentences = sibText.match(sentenceRegex);
                    const univSentences = document.createElement('p');

                    [...sentences].map(sentence => {
                        const univMetS = document.createElement('universality-metering-s');
                        univMetS.innerHTML = sentence.trim();
                        univSentences.appendChild(univMetS);
                    });

                    // console.log(sentences);
                    sib.parentNode.insertBefore(univSentences, sib);
                    sib.parentNode.removeChild(sib);
                }
            });
        }

        if (mode === 'paragraph') {
            this.siblings.map(sib => {
                if (sib.nodeName === 'P') {
                    const univMetP = document.createElement('universality-metering-p');
                    sib.parentNode.insertBefore(univMetP, sib);
                    univMetP.appendChild(sib);
                }
            });
        }

        this.toggle();
    }


    clearMode() {
        // console.log(this.mode);

        if (this.mode === 'paragraph') {
            this.siblings = getAllSiblings(this);
            // console.log(this.siblings);
            this.siblings.map(sib => {
                if (sib.nodeName === 'UNIVERSALITY-METERING-P') {
                    const p = sib.getElementsByTagName('p')[0];
                    sib.parentNode.insertBefore(p, sib);
                    sib.parentNode.removeChild(sib);
                }
            });
        }

        this.mode = '';
        this.modeLetter = '';
    }


    toggle() {
        const umBtn = this.getElementsByClassName('universality-metering-selector-um')[0];

        if (this.toggled === true) {
            this.selectors = html``;
            this.toggled = false;
            umBtn.classList.remove('universality-metering-selector-um-toggled');
        } else {
            this.selectors = html`
                ${
                    this.activeModes.map((mode) => html`
                        <div
                            class="universality-metering-selector"
                            @click=${ (e: Event) => this.setMode(mode) }
                        >
                            <span class="universality-metering-selector-kind">
                                ${mode}
                            </span>
                        </div>
                    `)
                }
            `;

            umBtn.classList.add('universality-metering-selector-um-toggled');
            this.clearMode();
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
