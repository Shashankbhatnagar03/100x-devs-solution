/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let cnt=0;
    str = str.replace(/\s/g, '').toLowerCase();

    for (let index = 0; index < str.length; index++) {
      const element = str[index];

      if(element=='a' || element=='e' || element=='i' || element=='o' || element=='u')
      {
        cnt++;
      }
      
    }
    return cnt;
}

module.exports = countVowels;