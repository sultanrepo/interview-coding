const arr = [5, 7, 1, 3, 4, 6, 8];

const sum = (val) => {
    let sum = 0;
    for (let i = 0; i < val.length; i++) {
        sum = sum + val[i];
    }
    return sum;
}

const max = (val) => {
    let max = 0;
    for (let i = 0; i < val.length; i++) {
        if (val[i] > max) {
            max = val[i];
        }
    }
    return max;
}

console.log(sum(arr));

const output = arr.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
}, 0);

console.log(output);

console.log(max(arr));

const output1 = arr.reduce((acc, curr) => {
    if (curr > acc) {
        acc = curr
    }
    return acc;
}, 0);

console.log(output1);