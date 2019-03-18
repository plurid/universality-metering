import { Component, State } from '@stencil/core';



@Component({
    tag: 'universality-metering',
    styleUrl: 'universality-metering.scss',
    shadow: true
})
export class UniversalityMetering {

    private activeSelectors = ['other', 'video', 'image', 'text', 'fragment', 'paragraph', 'sentence', 'word'];

    @State() toggledSelectors: boolean = false;
    @State() activeSelector: string = '';
    @State() activeSelectorLetter: string = '';
    @State() selectors: string = '';

    setActiveSelector = (selector: string) => {
        this.toggleSelectors();
        this.activeSelector = selector;
        this.activeSelectorLetter = selector[0];

        // this.siblings = getAllSiblings(this);
        // if (mode === 'sentence') {
        //     this.siblings.map(sib => {
        //         if (sib.nodeName === 'P') {
        //             const sentenceRegex = new RegExp('[^\.!\?]+[\.!\?]+', 'g');
        //             const sibText = sib.innerHTML;
        //             const sentences = sibText.match(sentenceRegex);
        //             const univSentences = document.createElement('p');

        //             [...sentences].map(sentence => {
        //                 const univMetS = document.createElement('universality-metering-s');
        //                 univMetS.innerHTML = sentence.trim();
        //                 univSentences.appendChild(univMetS);
        //             });

        //             // console.log(sentences);
        //             sib.parentNode.insertBefore(univSentences, sib);
        //             sib.parentNode.removeChild(sib);
        //         }
        //     });
        // }

        // if (mode === 'paragraph') {
        //     this.siblings.map(sib => {
        //         if (sib.nodeName === 'P') {
        //             const univMetP = document.createElement('universality-metering-p');
        //             sib.parentNode.insertBefore(univMetP, sib);
        //             univMetP.appendChild(sib);
        //         }
        //     });
        // }
    }


    clearActiveSelector = () => {
        if (this.toggledSelectors) {
            this.activeSelector = '';
            this.activeSelectorLetter = '';
        }
        // if (this.mode === 'paragraph') {
        //     this.siblings = getAllSiblings(this);
        //     // console.log(this.siblings);
        //     this.siblings.map(sib => {
        //         if (sib.nodeName === 'UNIVERSALITY-METERING-P') {
        //             const p = sib.getElementsByTagName('p')[0];
        //             sib.parentNode.insertBefore(p, sib);
        //             sib.parentNode.removeChild(sib);
        //         }
        //     });
        // }
    }

    toggleSelectors = () => {
        this.toggledSelectors = !this.toggledSelectors;
        this.clearActiveSelector();
    }

    render() {
        return (
            <div class="universality-metering-container">
            <div class="universality-metering-selectors">
                <div
                    class={`
                        universality-metering-selector
                        universality-metering-selector-um
                        ${this.toggledSelectors ? 'universality-metering-selector-um-toggled': ''}
                    `}
                    onClick={this.toggleSelectors}
                >
                    UM{this.activeSelectorLetter}
                </div>

                {this.toggledSelectors &&
                    (<div class="universality-metering-selectors-group">
                        { this.activeSelectors.map((selector: string) => {
                                return (
                                    <div
                                        class="universality-metering-selector"
                                        onClick={this.setActiveSelector.bind(this, selector)}
                                    >
                                        <span class="universality-metering-selector-kind">
                                            {selector}
                                        </span>
                                    </div>
                                );
                            }
                        )}
                    </div>)
                }
            </div>
            </div>
        );
    }
}
