const arr = [[1,2],[3,4],[5]];

const output = arr.reduce((acc, curr) => {
    return acc.concat(curr);
}, []);

console.log(output);