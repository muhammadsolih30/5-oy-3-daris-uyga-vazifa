// 1 - masala
// Map.prototype.deleteMany = function (...keys) {
//   for (let key of keys) {
//     this.delete(key);
//   }
//   return this;
// };

// let obj = new Map([
//   ['a', 1],
//   ['b', 2],
//   ['c', 3],
//   ['d', 4]
// ]);
// console.log(obj.deleteMany('a', 'c')); 


//! 2 - masala
// function mapSum(map) {
//   let sum = 0;
//   for (let value of map.values()) {
//     sum += value;
//   }
//   return sum;
// }
// let obj2 = new Map([['a', 2], ['b', 5], ['c', 3]]);
// console.log(mapSum(obj2)); 


//! 3 - masala
// function getMapIntersection(map1, map2) {
//   let result = new Map();
//   for (let [key, value] of map1) {
//     if (!map2.has(key)) {
//       result.set(key, value);
//     }
//   }
//   for (let [key, value] of map2) {
//     if (!map1.has(key)) {
//       result.set(key, value);
//     }
//   }
//   return result;
// }
// let map1 = new Map([['apple', 1], ['banana', 2], ['orange', 3]]);
// let map2 = new Map([['apple', 4], ['orange', 5], ['grape', 6]]);
// console.log(getMapIntersection(map1, map2)); // Map { 'banana' => 2, 'grape' => 6 }


//! 4 - masala

//! 5 - masala
// function setUnion(set1, set2) {
//   return new Set([...set1, ...set2]);
// }
// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([2, 3, 4]);
// console.log(setUnion(set1, set2));


//! 6 - masala
// function setIntersection(set1, set2) {
//   return new Set([...set1].filter(x => set2.has(x)));
// }
// let s1 = new Set([1, 2, 3]);
// let s2 = new Set([2, 3, 4]);
// console.log(setIntersection(s1, s2)); 


//! 7 - masala
// function checkSetSubset(set1, set2) {
//   for (let item of set1) {
//     if (!set2.has(item)) return false;
//   }
//   return true;
// }
// let subset1 = new Set([1, 2]);
// let subset2 = new Set([1, 2, 3, 4]);
// console.log(checkSetSubset(subset1, subset2));


//! 8 - masala
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// let arr = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(arr)); // [1, 2, 3, 4, 5]


//! 9 - masala


//! 10 - masala
// function concatArrays(...arrays) {
//   return [].concat(...arrays);
// }
// console.log(concatArrays([1, 2], [3, 4], [5, 6])); 
