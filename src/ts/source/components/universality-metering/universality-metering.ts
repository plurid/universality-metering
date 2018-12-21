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


const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}


const getAllSiblings = (element: Element) => {
    const parent: Element = element.parentElement;
    const children: Element[] = Array.from(parent.children);
    return children.filter(child => child !== element);
}

const textModes = ['text', 'fragment', 'paragraph', 'sentence', 'word'];

const checkModes = (element: Element): string | Array<string> | boolean => {
    switch (element.nodeName) {
        case 'P':
            return textModes;
        case 'IMG':
            return 'image';
        case 'VIDEO':
            return 'video';
        case 'CANVAS':
        case 'IFRAME':
            return 'other';
        case 'DIV':
            // console.log('DIV -- recursivity');
            // console.log(element.children);
            const arr = Array.from(element.children);
            let a = arr.map(el => checkModes(el));
            console.log(a);
        default:
            return false;
    }
}



class UniversalityMetering extends LitElement {
    private toggled: boolean;
    private selectors: TemplateResult;
    private mode: string;
    private siblings: Element[];

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

        let activeModes = this.siblings.map(sib => checkModes(sib));
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
            // to be dinamically resolved depending on what the div with the
            // universality-metering element contains
            const modes = ['other', 'video', 'image', 'text', 'fragment', 'paragraph', 'sentence', 'word'];

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
