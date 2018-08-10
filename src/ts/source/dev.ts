// // function init() {
// //     setParagraphs();
// //     setHover();
// // }

// // init();


// // function setParagraphs() {
// //     let p = document.getElementsByTagName('p');

// //     for (let paragraph of p) {
// //         let words = paragraph.innerText.split(' ');
// //         // console.log(words);

// //         let newParagraph = '';

// //         for (let word of words) {
// //             word = '<um-word>' + word + '</um-word>';
// //             newParagraph = newParagraph + word + ' ';
// //         }

// //         // console.log(newParagraph);

// //         paragraph.innerHTML = newParagraph;

// //     }
// // }


// // class UmWord extends HTMLElement {
// //     constructor() {
// //         super();
// //     }
// // }

// // window.customElements.define('um-word', UmWord);


// // class UmSentence extends HTMLElement {
// //     constructor() {
// //         super();
// //     }
// // }

// // customElements.define('um-sentence', UmSentence);


// // function setHover() {
// //     let umWords = document.getElementsByTagName('um-word');
// //     // let umSentences = document.getElementsByTagName('um-sentence');


// //     for (let umWord of umWords) {
// //         umWord.addEventListener('mouseenter', event => {
// //             setTimeout(() => {
// //                 umWord.style.color = "red";
// //             }, 400);
// //         });
// //         umWord.addEventListener('mouseleave', event => {
// //             umWord.style.color = "white";
// //         });
// //     }

// //     // for (let umSentence of umSentences) {
// //     //     umSentence.addEventListener('mouseenter', event => {
// //     //         // if (!event.shiftKey) {
// //     //             umSentence.style.color = "red";
// //     //         // }
// //     //     });
// //     //     umSentence.addEventListener('mouseleave', event => {
// //     //         umSentence.style.color = "white";
// //     //     });
// //     // }
// // }





// // ---------------------



// function init() {
//     setParagraphs();
//     // setHover();
// }

// init();


// function setParagraphs() {
//     let p = document.getElementsByTagName('p');

//     for (let paragraph of p) {
//         let words = paragraph.innerText.split(' ');
//         // console.log(words);

//         let newParagraph = '';

//         for (let word of words) {
//             let spannedWord = '<span class="um-word">' + word + '</span>';
//             newParagraph = newParagraph + spannedWord + ' ';
//         }

//         // console.log(newParagraph);

//         paragraph.innerHTML = newParagraph;

//     }
// }


// // class UmWord extends HTMLElement {
// //     constructor() {
// //         super();
// //     }
// // }

// // window.customElements.define('um-word', UmWord);


// // class UmSentence extends HTMLElement {
// //     constructor() {
// //         super();
// //     }
// // }

// // customElements.define('um-sentence', UmSentence);


// // function setHover() {
// //     let umWords = document.getElementsByTagName('um-word');
// //     // let umSentences = document.getElementsByTagName('um-sentence');


// //     for (let umWord of umWords) {
// //         umWord.addEventListener('mouseenter', event => {
// //             setTimeout(() => {
// //                 umWord.style.color = "red";
// //             }, 400);
// //         });
// //         umWord.addEventListener('mouseleave', event => {
// //             umWord.style.color = "white";
// //         });
// //     }

// //     // for (let umSentence of umSentences) {
// //     //     umSentence.addEventListener('mouseenter', event => {
// //     //         // if (!event.shiftKey) {
// //     //             umSentence.style.color = "red";
// //     //         // }
// //     //     });
// //     //     umSentence.addEventListener('mouseleave', event => {
// //     //         umSentence.style.color = "white";
// //     //     });
// //     // }
// // }
