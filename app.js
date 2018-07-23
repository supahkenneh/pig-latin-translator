const vowels = ['a', 'e', 'i', 'o', 'u'];
const ay = '-ay';

function pigLatinEncoder (str) {
  let firstChar = str.charAt(0);
  let encodedStr = '';
  console.log(firstChar);
  console.log(str);
  if (vowels.includes(firstChar)) {
    encodedStr = str.concat(ay);
    // let indexOfFirst = str.indexOf(firstChar);
    // encodedStr = str.substring(indexOfFirst + 1, str.length).concat(firstChar + ay);
    console.log(encodedStr);
  } else {
    console.log('starts with consonant')
  }
}

pigLatinEncoder('are');