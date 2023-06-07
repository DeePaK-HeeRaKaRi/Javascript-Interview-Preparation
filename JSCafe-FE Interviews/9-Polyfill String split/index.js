// const s='The quick the fox jumps the lazy dog'
// console.log(s.split(' '))
// console.log(s.split(''))
// console.log(s.split('the'))
const mySplit = (string, delimeter) => {
  if (delimeter == "") {
    return Array.from(string);
  }
  const res = [];
  const delimeterLength = delimeter.length;
  console.log("delimeterLength----------", delimeterLength);
  const startSplit = (str, i) => {
    if (i >= string.length) return;
    const findDelimeterIndex = str.indexOf(delimeter);
    console.log(findDelimeterIndex);
    if (findDelimeterIndex >= 0) {
      res.push(str.substring(0, findDelimeterIndex));
      startSplit(
        str.substring(findDelimeterIndex + delimeterLength),
        findDelimeterIndex + delimeterLength
      );
    } else {
      res.push(str);
    }
    return res;
  };

  return startSplit(string, 0);
};

const s = "The quick the fox jumps the lazy dog";
// console.log(mySplit(s,''))
// console.log(mySplit(s,' '))
// console.log(mySplit(s,'the'))

// we can use
// String.prototype.customSplit = function (delimeter) {
//   if (delimeter == "") {
//     return Array.from(this);
//   }
//   const res = [];
//   const delimeterLength = delimeter.length;
//   //  console.log("delimeterLength----------", delimeterLength);
//   const startSplit = function (str, i) {
     
//     const findDelimeterIndex = str.indexOf(delimeter);
//     console.log(findDelimeterIndex);
//     if (findDelimeterIndex >= 0) {
//       res.push(str.substring(0, findDelimeterIndex));
//       startSplit(str.substring(findDelimeterIndex + delimeterLength),findDelimeterIndex + delimeterLength);
//     } else {
//       res.push(str);
//     }
//     return res;
//   };
//   return startSplit(this, 0);
 
// };
// console.log(s.customSplit("the"));

String.prototype.customSplit = function (delimiter) {
  if (delimiter === "") {
    return Array.from(this);
  }

  const res = [];
  const delimiterLength = delimiter.length;

  const startSplit = (str)=>{
    const findDelimiterIndex = str.indexOf(delimiter);

    if (findDelimiterIndex >= 0) {
      res.push(str.substring(0, findDelimiterIndex));
      startSplit(str.substring(findDelimiterIndex + delimiterLength));
    } else {
      res.push(str);
    }
  };

  startSplit(this);
  return res;
};

console.log(s.customSplit("the"));
