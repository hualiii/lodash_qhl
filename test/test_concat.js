import concat from "../js/concat";

function testConcat() {
    let array = [1];
    let other = concat(array, 2, [3], [[4]]);

    console.log(other);
    // => [1, 2, 3, [4]]

    console.log(array);
    // => [1]
}

export default testConcat;