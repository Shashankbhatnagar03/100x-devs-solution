/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
 let a = str1.toLowerCase();
 let b =str2.toLowerCase();
  a = a.replace(/\s/g, '');
    b = b.replace(/\s/g, '');

    // Convert strings to arrays, sort them, and join back into strings
    const sortedStr1 = a.split('').sort().join('');
    const sortedStr2 = b.split('').sort().join('');

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
  
}

module.exports = isAnagram;
