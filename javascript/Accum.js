/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

Accumul.accum("abcd");    // "A-Bb-Ccc-Dddd"
Accumul.accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
Accumul.accum("cwAt");    // "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

const Accumul = {};
Accumul.accum = function(input) {
  let response = '';
  for (let i = 0; i < input.length; i++) {
    let letter = input.charAt(i);
    response += letter.toUpperCase();
    for (let j = 1; j < i+1; j++) {
      response += letter;
    }
    if ((i + 1) !== input.length) {
      response += '-';
    }
  }
  return response;
}

console.clear();
console.log(Accumul.accum("abcd"));
console.log(Accumul.accum("RqaEzty"));
console.log(Accumul.accum("cwAt"));