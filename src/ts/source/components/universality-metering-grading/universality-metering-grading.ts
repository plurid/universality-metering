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
                <div class="universality-metering-grading-header">
                    <div class="universality-metering-grading-header-numbers">
                        <div class="universality-metering-grading-header-switch-group">
                            <div>
                                Crisp
                            </div>

                            <div>
                                <label class="universality-metering-grading-header-switch">
                                    <input type="checkbox" checked>
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
                                    <input type="checkbox" checked>
                                    <span class="universality-metering-grading-header-slider universality-metering-grading-header-slider-round"></span>
                                </label>
                            </div>

                            <div>
                                Type 2
                            </div>
                        </div>
                    </div>
                    <div class="universality-metering-grading-header-pluridimensional">
                        <input type="checkbox">
                        <label>Pluridimensional</label>
                    </div>

                    <div class="universality-metering-grading-header-kind">
                        ${capitalize(this.mode)} Universality
                    </div>
                </div>
                <div class="universality-metering-grading-area">
                    <input type="range" min="-1000" max="1000">
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
