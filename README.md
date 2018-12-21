<p align="center">
    <img src="https://raw.githubusercontent.com/plurid/universality-metering/master/about/identity/logo-square.png" height="200px">
</p>


<p align="center">
    <a href="https://www.npmjs.com/package/universality-metering">
        <img src="https://img.shields.io/npm/v/universality-metering.svg?colorB=581b38&logo=npm&style=for-the-badge" alt="Version">
    </a>
    <a href="https://github.com/plurid/universality-metering/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-blue.svg?colorB=492356&style=for-the-badge" alt="License">
    </a>
</p>



# Universality Metering

Grading System Interface for High-Level Abstracted, Multi-Peer Influenced Content


+ [Reason](#reason)
+ [Concept](#concept)
+ [Technology](#technology)
+ [Usage](#usage)
    + [Setup](#setup)
    + [HTML `universality-metering` Element](#html-universality-metering-element)



## Reason

    Act only according to that maxim whereby you can, at the same time, will that it should become a universal law.[*]

    * Kant, Immanuel (11993 HE) [11785 HE]. Grounding for the Metaphysics of Morals. Translated by Ellington, James W. (3rd ed.). Hackett. p. 30. ISBN 0-87220-166-X.

The `Universality Metering` stands by the above spring of/for action. It is the quest and the question of a such `Universality Metering` to obtain a user-given, subjective number pertaining to the `universality` of a sentence, paragraph, or even a single word.




## Concept


Text with the `UM` mark at the top right corner.

<p align="center">
    <img src="https://raw.githubusercontent.com/plurid/universality-metering/master/about/docs/images/universality-um.png" width="500px">
</p>


<p align="center">
    <img src="https://raw.githubusercontent.com/plurid/universality-metering/master/about/docs/images/universality-um-hover.png" width="500px">
</p>


Selection for the `Sentence` mode of text splitting which will allow valuations on the sentence level.

<p align="center">
    <img src="https://raw.githubusercontent.com/plurid/universality-metering/master/about/docs/images/universality-um-select.png" width="500px">
</p>

If the text contains images, videos, canvas and/or iframes elements the selection modes will reflect that by adding the `Image`, `Video`, `Canvas` and `Iframe` mode respectively.


Due to the highly sensitive, multi-dimensional matters of human (or general idea-based, that is, grounded in touch and sight) language, a single crisp number is only recommended as an introductive step into this valuation metric for the universability of a language entity:

<p align="center">
    <img src="https://raw.githubusercontent.com/plurid/universality-metering/master/about/docs/images/universality-crisp.png" width="500px">
</p>

A more advanced metric would be obtained using fuzzy numbers (types 1 and 2):

<p align="center">
    <img src="https://raw.githubusercontent.com/plurid/universality-metering/master/about/docs/images/universality-fuzzy.png" width="500px">
</p>

Or even a pluridimensional manner of valuation:

<p align="center">
    <img src="https://raw.githubusercontent.com/plurid/universality-metering/master/about/docs/images/universality-pluridimensional.png" width="500px">
</p>

The dimensions could remain nameless, or could be given names like `clarity`, `expresiveness`, `poetry`, and so forth.




## Technology


 All rating values are between `-1000` and `1000`.


The user rates in monodimensional mode with crisp numbers

    345 or -129 or 551 or -875


The user rates in monodimensional mode with fuzzy numbers type-1

    // to sort out the encoding
    // maybe
    [-250, 351, 0.5]
    lower limit, upper limit, membership level (for a triangle)
    How are other number shapes defined?


The user rates in monodimensional mode with fuzzy numbers type-2

     // to sort out the encoding


The user rates in pluridimensional mode with crisp numbers (10 dimensions)

    [233, -155, 920, -415, -241, 475, -363, 80, 607, -224]


The user rates in pluridimensional mode with fuzzy numbers type-1 (10 dimensions)

    // to sort out the encoding


The user rates in pluridimensional mode with fuzzy numbers type-2 (10 dimensions)

    // to sort out the encoding




How the user Inputs Values?

Clicking through the interface.


How the `HTML` element passes the clicking values?

Events emitting.


How the `universality-metering` software knows which user added which input?

It doesn't. When the event is emitted, the application must record which user saved which value for which text/image/at which timeframe in video, etc.


How the values are stored?



What calculations are made with them?


How are conversions made between

+ monodimensional crisp numbers
+ monodimensional fuzzy numbers type-1
+ monodimensional fuzzy numbers type-2
+ pluridimensional mode crisp numbers
+ pluridimensional mode fuzzy numbers type-1
+ pluridimensional mode fuzzy numbers type-2

?


Should users see how other users rated? How their friends rated? How are friends defined?

The users should see their given rating, if any, and the median from the user given input?, and the estimated level given by an AI?




## Usage

### Setup

Add the `universality-metering` `script.js` and `styles.css` to the application from the `./pkg` folder (or install with `npm`).

    npm install universality-metering

and import

    import 'universality-metering';
    import 'universality-metering/pkg/styles.css';

using `Webpack` or anything else to bundle.



### HTML `universality-metering` Element


Add the `<universality-metering>` HTML Element to a `<div>` or other HTML Element.

