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

console.log(pigLatinDecoder('omelet-ay'));

function pigLatinDecoder (str) {
  let decodedStr = '';
  let findHyphen = str.indexOf('-');
  let letterAfter = str.charAt(findHyphen + 1);
  if (!vowels.includes(letterAfter)) {
    let workStr = str.substring(findHyphen+1, str.length);
    let parsedStr = workStr.substring(0,(workStr.indexOf('a')));
    decodedStr = `${parsedStr}${str.substring(0, findHyphen)}`;
  } else {
    decodedStr = str.substring(0, findHyphen);
  }
return decodedStr;
}