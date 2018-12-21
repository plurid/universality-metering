import { LitElement, html } from '@polymer/lit-element';
import { TemplateResult } from 'lit-html';

// to use some kind of data-um-id?

// <um-text data-um-id="u7ngb413">
//      <um-paragraph data-um-id="039zzmn1">
//          <um-sentence data-um-id="k4j1kjma">
//              <um-word data-um-id="hj3nz21a">If</um-word> <um-word data-um-id="ok31nk51">one</um-word>
//                   ...
//          </um-sentence>
//      </um-paragraph>
//      <um-image data-um-id="65j1plka"> <img ...> </um-image>
//  </um-text>
//

const UM = {
    text: {
        word: {
            if: {

            },
            one: {

            }
        },
        sentence: {

        },
        paragraph: {

        }
    },
    image: {

    },
    video: {

    },
    iframe: {

    },
    canvas: {

    }
}



class UniversalityMetering extends LitElement {
    private toggled: boolean;
    private selectors: TemplateResult;
    private mode: string;

    static get properties() {
        return {
        };
    }

    constructor() {
        super();
        this.toggled = false;
        this.mode = '';
        this.selectors = html``;
    }

    createRenderRoot() {
        return this;
    }

    setMode(mode: string) {
        this.mode = mode;
        console.log(this.mode);
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
            const modes = ['text', 'paragraph', 'sentence', 'word'];

            this.selectors = html`
                ${
                    modes.map((mode) => html`
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


const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
