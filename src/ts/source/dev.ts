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





// Text Switching

// let umParagraphs = document.getElementsByClassName('um-paragraph');
// let originalContent: string[] = [];
// let paragraphsContent  = [];

// const paragraphBs = 'This might be bullshit.'
// const paragraphTr = '(T)read carefully.'

// for (let umParagraph of umParagraphs) {
//     let content = umParagraph.innerHTML;
//     let contentArray = [];
//     originalContent.push(content);

//     const regex = />(.*?)</g;
//     let found: RegExpExecArray | null;

//     while ((found = regex.exec(content)) !== null) {
//         if (/\S/.test(found[1])) {
//             contentArray.push(found[1]);
//         }
//     }

//     paragraphsContent.push(contentArray);
// }

// let strReplace = originalContent[0];

// strReplace = strReplace.replace(paragraphsContent[0][0], paragraphBs);
// strReplace = strReplace.replace(paragraphsContent[0][1], paragraphTr);
// strReplace = strReplace.replace(paragraphsContent[0][2], paragraphBs);

// console.log(paragraphsContent[0][0]);

// for (let umParagraph of <any>umParagraphs) {
//     for (let i = 1; i < 30; i++) {
//         if (i % 2 != 0) {
//             setTimeout(() => {
//                 console.log(i);
//                 console.log('bs');
//                 umParagraph.innerHTML = strReplace;
//             }, 3000 * i);
//         }

//         if (i % 2 == 0) {
//             setTimeout(() => {
//                 console.log(i);
//                 console.log('orig');
//                 umParagraph.innerHTML = originalContent[0];
//             }, 3000 * i);
//         }
//     }
// }

// console.log(originalContent);
// console.log(paragraphsContent);
