let uniqueMorseRepresentations = function (words) {

    const morseCode = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
    return (words.reduce((acc, word) => {
        const wordMap = word.split("").map(char => morseCode[char.charCodeAt(0) - 97]).join("");

        acc.set(wordMap, true);

        return acc;
    }, new Map())).size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))