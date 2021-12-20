import compact from "../js/compact";

function testCompact() {
    console.log(compact([1, 2, "", null, 3, undefined, 4, NaN, 5, false]));
}

export default testCompact;