'use strict';

function header( title ) {
  const n = 40;
  console.log();
  console.log('-'.repeat(n));
  console.log('-', title);
  console.log('-'.repeat(n));
}


// What does the following code return?
header( 'Quick Question #1');
const obj = new Set([1,1,2,2,3,4]);
console.log( '....My Answer -> { 1, 2, 3, 4 }');
console.log( 'Actual Answer ->', obj );
console.log( '........Score -> 50% (I forgot the "Set")');

// What does the following code return?
header( 'Quick Question #2');
const ans = [...new Set("referee")].join("");
console.log( '....My Answer -> ref');
console.log( 'Actual Answer ->', ans );
console.log( '........Score -> 100%');

// What does the Map m look like after running the following code?
header( 'Quick Question #3');
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
console.log( '....My Answer -> Map { [1,2,3]=>true,[1,2,3]=>false ');
console.log( 'Actual Answer ->', m);
console.log( '........Score -> 100%');

/* Write a function called hasDuplicate which accepts an array and returns true or false if that array
 contains a duplicate
 */
header('Has Duplicate?');
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;
console.log( hasDuplicate([1,3,2,1])) ;  // true
console.log( hasDuplicate([1,5,-1,4]) ); // false

/* Write a function called vowelCount which accepts a string and returns a map where the keys are numbers
 and the values are the count of the vowels in the string.
 */
header('Vowel Count');
const vowelCount = ( str ) => {
  const mp = new Map();
  [...str].filter(c => 'aeiou'.includes(c.toLowerCase()))
           .forEach( c => mp.set( c.toLowerCase(),  (mp.get(c) || 0) + 1));
  return mp;
}

console.log( vowelCount('awEsome')); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log( vowelCount('COlt')); // Map { 'o' => 1 }
