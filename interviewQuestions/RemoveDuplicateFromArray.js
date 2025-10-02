function unique(arr) {
    let uni = [];
    for (i = 0; i < arr.length; i++) {
        if(!uni.includes(arr[i])){
            uni.push(arr[i]);
        }
    }
    return uni;
}


const arr = [2, 4, 4, 6, 2, 4, 9, 8, 8, 6];
console.log(unique(arr));

//---------------------------------------------------------

const unique1 = [...new Set(arr)];

console.log(unique1);