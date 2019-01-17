// ***********************
// Challenge Assessment 3
// ***********************

// Using only JS, take an object with various properties.  Then create a new object that switches the keys and values.
// Example:
// Input:
// originalObject = {
//  age: 19,
//  name: 'Luke Skywalker',
//  eyeColor: 'blue',
//  isJedi: true
// };
// Output:
// newObject = {
//  19: 'age',
//  'Luke Skywalker': 'name',
//  blue: 'eyeColor',
//  true: 'isJedi'
// };
var originalObject = {
    age: 19,
    name: 'Luke Skywalker',
    eyeColor: 'blue',
    isJedi: true, 
}

let newObj = {};

// for (i in originalObject) {
    // console.log(i); //displays all keys from original object


for (k in originalObject) {  //"in" loops over keys
    // newObj[k] = originalObject[k]
    // console.log(k)
    newObj[originalObject[k]] = k;
}
console.log(newObj)