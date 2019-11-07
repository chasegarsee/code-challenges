// let dates = ['01 Mar 1992', '20 Jan 1990']

// function sortDates(dates) {
//     dates.sort(function (a, b) {
//         let dateA = new Date(a.dates)
//         let dateB = new Date(b.dates)

//         return dateA - dateB
//     })

// }

// console.log(sortDates())



function reverseWords(inputWords) {
    let words = []
    words = inputWords.split("\s+");
    let result = ""

    for (let i = 0; i < words.length; i++) {
        return result += words[i].split(" ").reverse().join(" ")
    }
}
let sentence = "Agoda Best App"
console.log(reverseWords(sentence))