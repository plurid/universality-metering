import { LitElement, html } from '@polymer/lit-element';

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
