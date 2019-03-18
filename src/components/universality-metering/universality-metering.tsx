import { Component, State } from '@stencil/core';



@Component({
    tag: 'universality-metering',
    styleUrl: 'universality-metering.scss',
    shadow: true
})
export class UniversalityMetering {

    @State() type: string = '';
    @State() typeLetter: string = '';
    @State() selectors: string = '';

    @State() toggledSelectors: boolean = false;

    private activeTypes = ['other', 'video', 'image', 'text', 'fragment', 'paragraph', 'sentence', 'word'];

    setType = (type: string) => {
        this.type = type;
        this.typeLetter = this.type[0];
        console.log(type);
        // console.log(this.modeLetter);
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

        this.toggleSelectors();
    }


    // clearMode = () => {
    //     // console.log(this.mode);

    //     if (this.mode === 'paragraph') {
    //         this.siblings = getAllSiblings(this);
    //         // console.log(this.siblings);
    //         this.siblings.map(sib => {
    //             if (sib.nodeName === 'UNIVERSALITY-METERING-P') {
    //                 const p = sib.getElementsByTagName('p')[0];
    //                 sib.parentNode.insertBefore(p, sib);
    //                 sib.parentNode.removeChild(sib);
    //             }
    //         });
    //     }

    //     this.mode = '';
    //     this.modeLetter = '';
    // }

    toggleSelectors = () => {
        this.toggledSelectors = !this.toggledSelectors;
    }

    render() {
        return (
            <div class="universality-metering-selectors">
                <div
                    class={`
                        universality-metering-selector
                        universality-metering-selector-um
                        ${this.toggledSelectors ? 'universality-metering-selector-um-toggled': ''}
                    `}
                    onClick={this.toggleSelectors}
                >
                    UM{this.typeLetter}
                </div>

                {this.toggledSelectors &&
                    (<div class="universality-metering-selectors-group">
                        { this.activeTypes.map((type: string) => {
                                return (
                                    <div
                                        class="universality-metering-selector"
                                        onClick={this.setType.bind(this, type)}
                                    >
                                        <span class="universality-metering-selector-kind">
                                            {type}
                                        </span>
                                    </div>
                                );
                            }
                        )}
                    </div>)
                }
            </div>
        );
    }
}
