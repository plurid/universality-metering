/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface UniversalityMeteringGrading {
    'selector': string;
  }
  interface UniversalityMeteringGradingAttributes extends StencilHTMLAttributes {
    'selector'?: string;
  }

  interface UniversalityMeteringP {}
  interface UniversalityMeteringPAttributes extends StencilHTMLAttributes {}

  interface UniversalityMeteringS {}
  interface UniversalityMeteringSAttributes extends StencilHTMLAttributes {}

  interface UniversalityMetering {}
  interface UniversalityMeteringAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'UniversalityMeteringGrading': Components.UniversalityMeteringGrading;
    'UniversalityMeteringP': Components.UniversalityMeteringP;
    'UniversalityMeteringS': Components.UniversalityMeteringS;
    'UniversalityMetering': Components.UniversalityMetering;
  }

  interface StencilIntrinsicElements {
    'universality-metering-grading': Components.UniversalityMeteringGradingAttributes;
    'universality-metering-p': Components.UniversalityMeteringPAttributes;
    'universality-metering-s': Components.UniversalityMeteringSAttributes;
    'universality-metering': Components.UniversalityMeteringAttributes;
  }


  interface HTMLUniversalityMeteringGradingElement extends Components.UniversalityMeteringGrading, HTMLStencilElement {}
  var HTMLUniversalityMeteringGradingElement: {
    prototype: HTMLUniversalityMeteringGradingElement;
    new (): HTMLUniversalityMeteringGradingElement;
  };

  interface HTMLUniversalityMeteringPElement extends Components.UniversalityMeteringP, HTMLStencilElement {}
  var HTMLUniversalityMeteringPElement: {
    prototype: HTMLUniversalityMeteringPElement;
    new (): HTMLUniversalityMeteringPElement;
  };

  interface HTMLUniversalityMeteringSElement extends Components.UniversalityMeteringS, HTMLStencilElement {}
  var HTMLUniversalityMeteringSElement: {
    prototype: HTMLUniversalityMeteringSElement;
    new (): HTMLUniversalityMeteringSElement;
  };

  interface HTMLUniversalityMeteringElement extends Components.UniversalityMetering, HTMLStencilElement {}
  var HTMLUniversalityMeteringElement: {
    prototype: HTMLUniversalityMeteringElement;
    new (): HTMLUniversalityMeteringElement;
  };

  interface HTMLElementTagNameMap {
    'universality-metering-grading': HTMLUniversalityMeteringGradingElement
    'universality-metering-p': HTMLUniversalityMeteringPElement
    'universality-metering-s': HTMLUniversalityMeteringSElement
    'universality-metering': HTMLUniversalityMeteringElement
  }

  interface ElementTagNameMap {
    'universality-metering-grading': HTMLUniversalityMeteringGradingElement;
    'universality-metering-p': HTMLUniversalityMeteringPElement;
    'universality-metering-s': HTMLUniversalityMeteringSElement;
    'universality-metering': HTMLUniversalityMeteringElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
