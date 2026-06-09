// Day 2 — Strings & String Methods
// Problem 6: Reverse a String

function reverseString(str) {
    return str.split('').reverse().join('')
}

console.log(reverseString("hello"))


// Problem 7: Count Vowels in a String 

function countVowels(str) {
    const vowels = "aieouAIEOU"
    let count = 0

    for (let vowel of str) {
        if (vowels.includes(vowel)) {
            count++
        }
    }

    return count
}

console.log(countVowels("programming"))