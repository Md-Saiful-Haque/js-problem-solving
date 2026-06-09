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

console.log(countVowels("javascript"))

// Problem 8: Check Palindrome

function palindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return str === reversed;
}

console.log(palindrome("racecar"));
console.log(palindrome("hello"));


// Problem 9: Capitalize First Letter of Each Word 

function capitalizeLetters(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


console.log(capitalizeLetters("hello world"));


// Count Occurrences of a Character

const str = 'banana';
const char = 'a';

const parts = str.split(char);
console.log(parts);

console.log(countChar('banana', 'a'));