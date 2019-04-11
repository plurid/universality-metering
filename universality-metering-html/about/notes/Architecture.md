<link rel="stylesheet" type="text/css" href="style.css">



# Architecture

To have a button for being able to show UM on hover?

and a button for entity selection (word, sentence, paragraph, full text)?


if score is under a certain value (dynamically calculated) to flip between the text and
'This might be bullshit. (T)read carefully.' or even
'This is bullshit. You are better without. Try reading: <suggestions>'



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
