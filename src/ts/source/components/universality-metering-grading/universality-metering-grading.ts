import { LitElement, html } from '@polymer/lit-element';

import { capitalize } from '../../utils/strings';
import { TemplateResult } from 'lit-html';



class UniversalityMeteringGrading extends LitElement {
    private _mode: string;
    private gradingArea: TemplateResult;

    static get properties() {
        return {
        };
    }

    constructor() {
        super();
        this.mode = this.getAttribute('mode');

        this.gradingArea = html`
            <div class="universality-metering-grading-area-crisp-slider-container">
                <input type="range" min="-1000" max="1000" value="352" class="universality-metering-grading-area-crisp-slider">
                <span class="universality-metering-grading-area-crisp-slider-value">352</span>
            </div>
        `;
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
                <div class="universality-metering-grading-header">
                    <div class="universality-metering-grading-header-numbers">
                        <div class="universality-metering-grading-header-switch-group">
                            <div>
                                Crisp
                            </div>

                            <div>
                                <label class="universality-metering-grading-header-switch">
                                    <input type="checkbox">
                                    <span class="universality-metering-grading-header-slider universality-metering-grading-header-slider-round"></span>
                                </label>
                            </div>

                            <div>
                                Fuzzy
                            </div>
                        </div>
                    </div>
                    <div class="universality-metering-grading-header-type">
                        <div class="universality-metering-grading-header-switch-group">
                            <div>
                                Type 1
                            </div>

                            <div>
                                <label class="universality-metering-grading-header-switch">
                                    <input type="checkbox">
                                    <span class="universality-metering-grading-header-slider universality-metering-grading-header-slider-round"></span>
                                </label>
                            </div>

                            <div>
                                Type 2
                            </div>
                        </div>
                    </div>
                    <div class="universality-metering-grading-header-pluridimensional">
                        <label class="universality-metering-grading-header-pluridimensional-checkmark-container">Pluridimensional
                            <input type="checkbox">
                            <span class="universality-metering-grading-header-pluridimensional-checkmark"></span>
                        </label>
                    </div>

                    <div class="universality-metering-grading-header-kind">
                        <div class="universality-metering-grading-header-kind-text">
                            ${capitalize(this.mode)} Universality
                        </div>
                        <div class="universality-metering-grading-header-kind-question-mark">
                            ?
                            <div class="universality-metering-grading-header-kind-question-mark-text">
                                <p>Act only according to that maxim whereby you can, at the same time, will that it should become a universal law.*</p>

                                <p>* Kant, Immanuel (11993 HE) [11785 HE]. Grounding for the Metaphysics of Morals. Translated by Ellington, James W. (3rd ed.). Hackett. p. 30. ISBN 0-87220-166-X.</p>

                                <p>To able to stand as truth, a text, image, or other media should at least aspire to universality.</p>

                                <p><a href="https://github.com/plurid/universality-metering" target="_blank">About Universality Metering</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="universality-metering-grading-area">
                    ${ this.gradingArea }
                </div>
                <div class="universality-metering-grading-buttons">
                    <button class="universality-metering-grading-button">
                        Mine
                    </button>
                    <button class="universality-metering-grading-button">
                        Median
                    </button>
                    <button class="universality-metering-grading-button">
                        Machine
                    </button>
                    <button class="universality-metering-grading-button">
                        Friends
                    </button>
                </div>
            </div>
        `;
    }
}


customElements.define('universality-metering-grading', UniversalityMeteringGrading);
