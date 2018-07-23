const vowels = ['a', 'e', 'i', 'o', 'u'];

function pigLatinEncoder (str) {
  let firstChar = str.charAt(0);
  let encodedStr = '';
  if (vowels.includes(firstChar)) {
    encodedStr = `${str}-ay`;
  } else {
    for (let i = 0; i < str.length; i ++) {
      if (vowels.includes(str[i])) { 
        let remainingStr = str.substring(i, str.length);
        let strToConcat = str.substring(0, i);
        encodedStr = remainingStr.concat(`-${strToConcat}ay`);
        break;
      }
    }
  }
  return encodedStr;
}

console.log(pigLatinDecoder('anana-bay'));

function pigLatinDecoder (str) {
  let findHyphen = str.indexOf('-');
  console.log(findHyphen);
}