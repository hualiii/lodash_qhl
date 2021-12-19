import chunk from "./js/chunk.js";

// test lodash chunk
let array = [1, 2, 3, 4, 5, 6, 7];
let chunkArr = chunk(array, 2);
console.log(chunkArr); //[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]

console.log("lodash chunk end ----------------------");
