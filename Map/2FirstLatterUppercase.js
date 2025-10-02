const arr = ['sultan', 'Sabreen', 'AsHraF'];

const upperCaseName = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
}

console.log(arr.map(upperCaseName));