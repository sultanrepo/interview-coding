const arr = [5, 1, 2, 4, 3, 6, 7];

const evenChecker = (num) => {
    if (num % 2 == 0) {
        return num;
    }
}

const oddChecker = (num) => {
    if (num % 2 != 0) {
        return num;
    }
}



const output = arr.filter((x) => {
    return x % 2 == 0;
});
console.log(output);
console.log(arr.filter(oddChecker));

console.log(arr.filter((x) => {
    return x > 4;
}))