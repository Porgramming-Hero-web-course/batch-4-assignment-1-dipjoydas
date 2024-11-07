"use strict";
{
    const countWordOccurrences = (sentence, word) => {
        const regExp = new RegExp(word, 'ig');
        const matchedArray = sentence.match(regExp);
        if (matchedArray) {
            return matchedArray.length;
        }
        return 0;
    };
    console.log(countWordOccurrences('I love typescript', 'typescript'));
}
