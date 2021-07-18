// function areSimilar(a, b) {
//   if (a.toString() === b.toString()) {
//     return true;
//   }
//   const c = [];
//   const d = [];
//   a.forEach((item, index) => {
//     if (item !== b[index]) {
//       c.push(item);
//       d.push(b[index]);
//     }
//   });
//   return c === d.reverse() ? true : false;
// }
// // console.log(areSimilar([1, 2, 3], [3, 2, 1]));

const obj = {
  name: [1, 2, 3],
};
const { name } = obj;
console.log(name);
