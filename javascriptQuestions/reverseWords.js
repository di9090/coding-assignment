// A. Take a sentence as an input and reverse every word in that sentence.


function reverseWords(sentence) {
    // Split the sentence into words
    let words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = reverseString(words[i]);
    }

    let reversedSentence = words.join(" ");
    return reversedSentence;
}

function reverseString(str) {
    // Convert the string to an array, reverse it, and join it back into a string
    return str.split("").reverse().join("");
}

let inputSentence = "This is a sunny day";
let reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
