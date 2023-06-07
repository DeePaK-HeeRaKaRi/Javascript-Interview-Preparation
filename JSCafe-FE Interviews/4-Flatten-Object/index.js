const flattenObject = (obj, parent) => {
  let finalObj = {};
  const generateFlat = (obj, parent) => {
    for (let key in obj) {
      const newParent = parent + key;
      console.log(newParent);
      const value = obj[key];
      if (typeof value === "object") {
        finalObj = generateFlat(value, newParent + ".");
      } else {
        finalObj[newParent] = value;
      }
    }
    return finalObj;
  };
  return generateFlat(obj, parent);
};
// let obj={
//     A:'23',
//     B:4,
//     C:{
//         D:20,
//         E:30,
//         G:{
//             Z:222,
//             M:333
//         },
//         F:[1,2]
//     }
// }

let obj = {
  A: "12",
  B: 23,
  C: {
    P: 239,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};
const res = flattenObject(obj, "");
console.log(JSON.stringify(res));
